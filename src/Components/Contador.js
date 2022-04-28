import { useState, useEffect } from "react";

const Contador = ({init,stock,onAdd}) => {
    const [contador, setContador] = useState(init);
    const [confirmado, setConfirmado] = useState(false);

    const sumar = () => {
        setContador(contador + 1);
    }

    const restar = () => {
        setContador(contador - 1);
    }

    const confirmar = () => {
        setConfirmado(true);
    }

    if(!confirmado) {
        return (
            <div>
                <p>Productos a comprar : {contador}</p>
                <button onClick={sumar} className="material-icons">add</button>
                <button onClick={restar} className="material-icons">remove</button>
                <button onClick={confirmar}>Confirmar</button>
            </div>
        )
    }else{
        return(
            <div>
                <p>Productos a comprar : {contador}</p>
                <button onClick={sumar} className="material-icons">add</button>
                <button onClick={restar} className="material-icons">remove</button>
                <button onClick={confirmar}>confirmar</button>
                <p className="modal">Se confirmaron {contador} productos</p>
            </div>
        )
    }

}

export default Contador;