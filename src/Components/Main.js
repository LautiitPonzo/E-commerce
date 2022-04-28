import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/productos/:nombreCategoria" element={<ItemDetailContainer/>}></Route>
                <Route path="/producto:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/carrito" element={<Carrito/>}></Route>
            </Routes>
        </main>
    )
}

export default Main