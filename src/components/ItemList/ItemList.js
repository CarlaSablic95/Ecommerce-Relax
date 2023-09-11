import Item from '../Item/Item';

const ItemList = ({productos}) => {
    return(
        <div className="container">
            <div className="row">
                    { productos.map(producto => <Item key={producto.id} {...producto} />)}
        </div>
        </div>
    );
}

export default ItemList;