import { Link } from "react-router-dom";
import IconoCarrito from './carrito.png';


const Cart = () => {
    return (
        <section className="py-5 my-5">
            <div className="container text-center" id="contenido-carrito">
                <h4 className="text-center text-black">¡No hay productos en el carrito!</h4>
                <div className="">
                 <img src={IconoCarrito} className="my-4" />
                </div>
                <Link to="/products" className="text-center text-decoration-none fs-6 btn btn-primary border-0">Volver a la tienda
                </Link></div>
        </section>
    )
}

export default Cart;