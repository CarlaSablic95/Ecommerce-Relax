import { Link } from "react-router-dom";

const Item = ({id, title, price, pictureUrl, category}) => {
    return (
        <div className="col-12 col-md-4 text-center position-relative mb-5">
            <div className="badge position-absolute top-0 end-0">
                {(category === "mujer") ? <p className="bg-dark text-white p-2">Mujer</p> : <p className="bg-dark text-white p-2">Hombre</p>} 
            </div>
            <picture>
                 <img src={`../img/productos/${pictureUrl}`} alt={title} className="img-fluid rounded-top" />
                        </picture>
                        <div className="bg-dark card-info-producto text-center">
                            <h4 className="text-white fs-5 text-center pt-3">{title}</h4>
                            <p className="text-white fs-6 text-center">${price}</p>
                            <Link to={`/product/${id}`} className="btn btn-primary border-0 btn-ver-producto">Ver detalle</Link>
                        </div>
                    </div>
    )
}

export default Item;