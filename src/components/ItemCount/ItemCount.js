import { useState } from 'react';
const ItemCount = ({valorInicial, stockMax, onAdd}) => {

    const [cantidad, setCantidad] = useState(valorInicial);

    const agregarItem = () => {
        if(cantidad < stockMax) {
            setCantidad(cantidad + 1);
        }
    }

    const quitarItem = () => {
        if(cantidad > 1) {
            setCantidad(cantidad - 1);
        }
    }


    return (
        <div className="d-flex gap-4 p-4 align-items-center">
            <button className="btn btn-primary" onClick={quitarItem}>-</button>
                <p className="fw-bold mb-0">{cantidad}</p>
                <button className="btn btn-primary" onClick={agregarItem}>+</button>
            <div>
                <button className="btn btn-primary" onClick={() => onAdd(cantidad)} disabled={!stockMax}>Agregar al carrito</button>
            </div>
        </div>
    )
}

export default ItemCount;