import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig/config';
import Loader from '../Loader/Loader';


const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const { categoryID } = useParams();

    useEffect(() => {
        setLoading(true);

        const collectionRef = categoryID
            ? query(collection(db, 'items'), where('category', '==', categoryID))
            : collection(db, 'items')

            getDocs(collectionRef)
                .then((snapshots) => {
                    const products = snapshots.docs.map((snapshot) => ({ id: snapshot.id, ...snapshot.data() }))
                    setProducts(products)
                })
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
       
    }, [categoryID]);

    return (
        <div className='pt-5'>
            {loading ? <Loader/> : <ItemList products={products} loading={false} />}
        </div>
    );
}


export default ItemListContainer;