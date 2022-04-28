import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer"
import CartWidget from "./CartWidget";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer/>}></Route>
                <Route path="/producto:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/carrito" element={<CartWidget/>}></Route>
            </Routes>
        </main>
    )
}

export default Main