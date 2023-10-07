import { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useCart } from '../../context/CartProvider';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetail = ({ id, title, price, stock, style, image, description }) => {
    const [quantity, setQuantity] = useState(0);
    const { addItem } = useCart();

    const handleAddToCart = (number) => {
        setQuantity(number);
        addItem({ id: id, title, price, stock, style, image, description }, number);

        toast.success(`Producto "${title}" agregado al carrito`, {
            position: "top-right",
            autoClose: 4000
        });
    }

    return (
        <section className='container detalle-producto'>
            <div className="d-flex flex-column flex-md-row justify-content-center">
                <div className=''>
                    <img src={`/img/productos/${image}`} alt={title} className='img-fluid' />
                </div>
                <div className='text-center text-md-start'>
                    <p className='fst-italic text-body-secondary'>Estilo: {style}</p>
                    <h3 className='fw-bold mb-3'>{title}</h3>
                    <p className='fs-5'>${price}</p>
                    <hr />
                    <p><span className='fw-bold text-uppercase letter-spacing'>Descripción:</span> <br />{description}</p>
                    <div>
                        { stock === 0 ? 
                            (<p className='text-danger bg-danger-subtle text-center rounded'> Fuera de stock</p>)
                            : quantity > 0 ?
                            (<Link to='/cart' className='btn btn-primary'>Terminar compra</Link>)
                            : (<ItemCount initial={1} stock={stock || 0} onAdd={handleAddToCart} />)
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ItemDetail;
