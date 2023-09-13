import { useState, useEffect } from 'react';
import { getProductId } from '../../asyncMock';
import { useParams, Link } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState();
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        getProductId(Number(id))
            .then(product => {
                setProduct(product)
            })
            .catch(err => {
                console.log({ err })
            })
            .finally(() => setLoading(false))
    }, [id])

    if (loading) return <p className='text-center'>Cargando..</p>
    return (
        <section className='container py-4'>
            <Link to="/products" className='btn btn-primary'>Volver</Link>
            <ItemDetail {...product} />
    </section> 
    )
}

export default ItemDetailContainer;