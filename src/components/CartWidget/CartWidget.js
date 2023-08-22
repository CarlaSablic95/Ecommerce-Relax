const CartWidget = () => {
    return (
        <li className="text-center">
            <a href="#" className="position-relative" style={{color: "#201f1f"}}>
                <i className="bi bi-bag fs-5"></i>
                <span className="position-absolute start-100 rounded-pill badge" style={{backgroundColor:"#FEFAE0", color:"#201f1f", border: "1px solid",  top: "-8px"}}>3</span>
            </a>
        </li>
    )
}

export default CartWidget;