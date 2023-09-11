const Item = ({id, title, description, price, pictureUrl}) => {
    return (
        <div className="col-12 col-md-4 text-center">
            <picture>
                 <img src={pictureUrl} alt={title} className="img-fluid rounded-top" />
                        </picture>
                        <div className="bg-dark card-info-producto text-center">
                            <h4 className="text-white fs-5 text-center">{title}</h4>
                            <p className="text-white fs-6 text-center">${price}</p>
                            <p className="text-white fs-6 text-center">{description}</p>
                            <a href="#" className="btn btn-primary border-0 btn-ver-producto">Ver detalle</a>
                        </div>
                    </div>
    )
}

export default Item;