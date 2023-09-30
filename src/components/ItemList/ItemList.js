import Item from '../Item/Item';

const ItemList = ({products}) => {
    return(
        <div className="container">
            <div className="row justify-content-center">
                    { products.map(product => <Item key={product.id} {...product} />)}
            </div>
        </div>
    );
}

export default ItemList;