import { useState } from "react";

const ItemCount = ({ stock, initial}) => {

     const [count, setCount] = useState(initial)
     
     const addItem = () => {
            const newValue = count + 1
             if(newValue <= stock) {
                 setCount(newValue);
             }
     };

     const quitItem = () => {
        const newValue = count - 1
        if(newValue >= initial) {
            setCount(newValue);
        }
     };

     const onAdd = () => {
         const message = `Agregaste ${count} producto`;
         count === 1 ? alert(message) : alert(`${message}s`);
     };

    return (
        <>
            <img src="https://www.buenosaires.gob.ar/sites/gcaba/files/la_iliada-2.png" alt="la illiada" height="350px"/>
            <br></br>
            <div class="botones">
                <button onClick={addItem} class="click">+</button>
                <h3 class="numero">{count}</h3>
                <button onClick={quitItem} class="click">-</button>
            </div>
            <br></br>
            <button onClick={onAdd} class="agregar">Agregar al carrito</button>
        </>
    );
};

export default ItemCount;