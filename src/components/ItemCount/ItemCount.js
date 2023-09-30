import { useState } from 'react';

const ItemCount = ({ initial, stock, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const addItem = () => {
        if (quantity >= stock)
          return setQuantity(prev => prev + 1);
    }

    const deleteItem = () => {
        if (quantity <= 1) 
        return  setQuantity(prev => prev - 1);
        
    }

    const handleOnAdd = (quantity) => {
        onAdd(quantity)
    }


    return (
        <div className="d-flex gap-4 p-0 mt-2 mt-md-4 justify-content-center justify-content-md-start align-items-center">
            <div className="d-flex align-items-center">
                <button className="btn btn-primary" onClick={ deleteItem }>-</button>
                <p className="fw-bold mb-0 mx-4">{ quantity }</p>
                <button className="btn btn-primary" onClick={ addItem }>+</button>
            </div>
            <div>
                <button className="btn btn-primary" onClick={ handleOnAdd }>Agregar al carrito</button>
            </div>

        </div>
    )
}

export default ItemCount;