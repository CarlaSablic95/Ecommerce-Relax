const CartWidget = () => {
    return (
        <li className="position-relative d-flex align-items-center">
            <a href="#" className="" style={{color: "#201f1f"}}>
                <i className="bi bi-bag"></i>
                </a>
            <span className="position-absolute top-0 start-100 rounded-pill badge" style={{backgroundColor:"#FEFAE0", color:"#201f1f", border: "1px solid"}}>3</span>
        </li>
    )
}

export default CartWidget;