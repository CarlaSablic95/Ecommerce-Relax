import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebaseConfig/config';
import { Link } from 'react-router-dom';
import Loader from '../Loader/Loader';

const ItemDetailContainer = () => {
    const [loading, setLoading] = useState(true);
    const [product, setProduct] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true)
        const  docRef = doc(db, 'items', id)

        getDoc(docRef)
            .then(snapshot => {
                const data = snapshot.data()
                const detailProduct = { id: snapshot.id, ...data }
                setProduct(detailProduct)
            })
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    
     }, [id])

    return (
        <section className='container py-4'>
            <Link to="/products" className='btn btn-primary'>Volver</Link>
            { loading ? <Loader /> : 
            <ItemDetail {...product} />}
    </section> 
    )
}

export default ItemDetailContainer;