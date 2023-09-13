import { useState, useEffect} from 'react';
import { getProducts, getProductsCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);

    const { categoryID } = useParams();

    useEffect(() => {
        setLoading(true);

        const showProducts = categoryID ? getProductsCategory : getProducts;

        showProducts(categoryID)
            .then(response => {
                setProducts(response);
            })
            .catch(error => {
                console.error(error);
            })
            .finally(() => setLoading(false));
    }, [categoryID]);

    return (
        <div>
            <h1 className="mt-5 text-center">{greeting}</h1>
            {loading ? <p>Cargando..</p> : <ItemList products={products} loading={false} />}
        </div>
    );
}


export default ItemListContainer;