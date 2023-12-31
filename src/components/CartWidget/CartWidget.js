import { useCart } from '../../context/CartProvider';
import { Link }  from 'react-router-dom';

const CartWidget = () => {
    const { totalQuantity} = useCart();

    return (
        <Link className="" to="/cart">
            <div to="/#" className="position-relative ms-3 ms-lg-0" style={{color: "#201f1f"}}>
                <i className="bi bi-bag fs-5"></i>
                <span className="position-absolute start-100 rounded-pill badge" style={{backgroundColor:"#FEFAE0", color:"#201f1f", border: "1px solid",  top: "-8px", display: totalQuantity > 0 ? 'block' : 'none'}}>{totalQuantity}</span>
            </div>
        </Link>
    )
}

export default CartWidget;