import { useEffect, useState } from "react";
import Contador from "./Contador";

const baseDeDatos = [
    {
        id: 1,
        nombre: "Producto 1",
        precio: 100,
    },
    {
        id: 2,
        nombre: "Producto 2",
        precio: 200,
    },
    {
        id: 3,
        nombre: "Producto 3",
        precio: 300,
    },
    {
        id: 4,
        nombre: "Producto 4",
        precio: 400,
    },
    {
        id: 5,
        nombre: "Producto 5",
        precio: 500,
    },
    {
        id: 6,
        nombre: "Producto 6",
        precio: 600,
    }
];


const Container = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        const promesa = new Promise((res, rej) => {
            res(baseDeDatos);
        })

        .then((contenido) => {
            console.log(("Termino el pedido bien"));
        })

        .catch((error) => {
            console.log(("Error en el pedido"));
        })
    } , []);

    const onAdd = (cantidad) => {
        console.log(cantidad);
    }

    return (
        <>
            <Contador init={0} stock={productos.length} onAdd={onAdd} />
        </>
    )
}