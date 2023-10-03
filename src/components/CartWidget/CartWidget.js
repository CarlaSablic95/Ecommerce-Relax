import { useCart } from '../../context/CartProvider';
import { Link }  from 'react-router-dom';

const CartWidget = () => {
    const { cartList } = useCart();

    return (
        <Link className="" to="/cart">
            <div to="/#" className="position-relative" style={{color: "#201f1f"}}>
                <i className="bi bi-bag fs-5"></i>
                <span className="position-absolute start-100 rounded-pill badge" style={{backgroundColor:"#FEFAE0", color:"#201f1f", border: "1px solid",  top: "-8px"}}>{cartList.length}</span>
            </div>
        </Link>
    )
}

export default CartWidget;