import { useState } from "react";
import { useCart } from "../../context/CartProvider";
import { Timestamp, addDoc, documentId, getDocs, query, collection, where, writeBatch } from "../../firebaseConfig/config";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";

const Checkout = () => {
  const [loading, setLoading] = useState(false);
  const [orderId, setOrderId] = useState("");
  const { cartList, total, clear } = useCart();

  const createOrder = async ({ name, phone, email }) => {
    setLoading(true);
    try {
      const objOrder = {
        buyer: {
          name,
          phone,
          email,
        },
        items: cartList,
        total: total(),
        date: Timestamp.fromDate(new Date()),
      };

      const batch = writeBatch(db);
      const outOfStock = [];

      const ids = cartList.map((prod) => prod.id);
      const productsRef = collection(db, "items");
      const productsAddedFormFirestore = await getDocs(
        query(productsRef, where(documentId(), "in", ids))
      );

      const { docs } = productsAddedFormFirestore;
      docs.forEach((doc) => {
        const dataDoc = doc.data();
        const stockDb = dataDoc.stock;

        const productAddedToCart = cartList.find((prod) => prod.id === doc.id);
        const prodQuantity = productAddedToCart?.prodQuantity;

        if(stockDb >= prodQuantity) {
          batch.update(doc.ref, { stock: stockDb - prodQuantity });
        } else {
          outOfStock.push({ id: doc.id, ...dataDoc })
        }
      });

      if(outOfStock.length === 0) {
        await batch.commit();
        const orderRef = collection(db, "orders");
        const orderAdded = await addDoc(orderRef, objOrder);

        setOrderId(orderAdded.id);
        clear();
      } else {
        console.error("Hay productos que están fuera de stock");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  if(loading) {
    return <h1>Se está generando su orden...</h1>;
  }

  if(orderId) {
    return <h1>El ID de su orden es: { orderId }</h1>
  }

  return(
    <div>
      <h1>Checkout</h1>
      <CheckoutForm onConfirm={ createOrder } />
    </div>
  )
}

export default Checkout;