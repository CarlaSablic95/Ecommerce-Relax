import { obtenerProductos } from '../../asyncMock';
import { useState, useEffect} from 'react';
import ItemList from '../ItemList/ItemList';

const ItemListContainer = ({greeting}) => {
    const [loading, setLoading] = useState(false);
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setLoading(true)
        obtenerProductos()
            .then((productos) => setProductos(productos))
            .catch(err => console.log('Error al cargar productos', err))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            {/* <h1 className="mt-5 satisfy mensaje">{greeting}</h1> */}
            {loading ? <p>Cargando..</p> : <ItemList productos={productos} loading= {false} />}
        </div>
    )
}

export default ItemListContainer;