import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartProvider';
import { Link } from 'react-router-dom';

const ItemDetail = ({image, title, description, price, stock, style}) => {

    const [quantity, setQuantity] = useState(0);
    const { addItem } = useCart();

    const handleAddToCart = (number) => {
        setQuantity(number)
        addItem({ title, price, quantity: number })
    }

    return(
       <section className='container detalle-producto'>
        <div className="d-flex flex-column flex-md-row justify-content-center">
            <picture>
                <img src={image} alt={title} className='img-fluid'/>
            </picture>
        <div className='text-center text-md-start'>
            <h3 className='fw-bold'>{title}</h3>
            <p className='fst-italic text-secondary'>Estilo: {style}</p>
            <p>{description}</p>
            <p className='fw-bold'>${price}</p>
            <p className='fst-italic text-secondary'>Stock: {stock}</p>
            <div>
                { quantity > 0 ?
                (<Link to='/cart' className='btn btn-primary'>Terminar compra</Link>)
                    : (<ItemCount initial={1} stock={stock || 0 } onAdd={handleAddToCart} />) 
                    
            }
            </div>
        </div>
        </div>
    </section> 
    )
}

export default ItemDetail;