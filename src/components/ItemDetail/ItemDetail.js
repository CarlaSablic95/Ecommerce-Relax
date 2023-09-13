import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({pictureUrl, title, description, price}) => {
    return(
       <section className='container'>
        <div className="d-flex justify-content-center">
            <picture>
                <img src={`../img/productos/${pictureUrl}`} alt={title} />
            </picture>
        <div>
            <h3 className='fw-bold'>{title}</h3>
            <p>{description}</p>
            <p className='fw-bold'>${price}</p>
            <ItemCount valorInicial={1} stockMax={10} onAdd={(cantidad) => console.log('Producto agregado ', cantidad)} />
        </div>
        </div>
    </section> 
    )
}

export default ItemDetail;