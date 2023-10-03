// import { useContext, useState } from "react";
// import Checkout from "../../pages/Checkout/Checkout";
// import { useCart } from '../../context/CartProvider';

// const Checkout = () => {
//     const [loading, setLoading] = useState();
//     const [orderId, setOrderId] = useState('');

//     const { cartList, total,  clear } = useCart()

//     const createOrder = async ({ name, phone, email }) => {

//         setLoading(true)

//         try {
//             const order = {
//                 buyer: {
//                     name, phone, email
//                 },
//                 items: cartList,
//                 total: total,
//                 date: Timestamp.fromDate(new Date())
//             }

//             const batch = writeBatch(db)

//             const outOfStock = []

//             const ids = cart.map(item => item.id)

//             const productsRef = collection(db, 'items')

//             const productsFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in')))

//             const { docs } = productsFromFirestore

//             docs.forEach(doc => {
//                 const dataDoc = doc.data();
//                 const stockDb = dataDoc.stock;

//                 const prodAddedToCart = cart.find(prod => prod.id == doc.id)
//                 const prodQuantity = prodAddedToCart?.quantity

//                 if(stockDb >= prodQuantity) {
//                     batch.update(doc.ref, { stock: stockDb - prodQuantity })
//                 } else {
//                     outOfStock.push({ id: doc.id, ...dataDoc })
//                 }
//             })
//         }

//         catch(error) {
//             console.error(error)
//         }
//     } 
    
//     if(loading) {
//         return <Loader />
//     }

//     if(orderID) {
//         return <h1>El ID de su orden es: {orderID} </h1>
//     }

//     return (
//         <div>
//             <h1>Checkout</h1>
//             <CheckoutForm  onConfirm={createOrder} />
//         </div>
//     )
// }

// export default Checkout;