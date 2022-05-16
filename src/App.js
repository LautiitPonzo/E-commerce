import React, { useState } from "react";
import { Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import ItemDetailPage from "./pages/ItemDetailPage/ItemDetailPage";
import CartContext from "./contexts/cartContext";
import { CssBaseline } from "@mui/material";

function App() {
  const [cart, setCart] = useState([]);
  const [qnt, setQnt] = useState(0);

  const greeting = "OrsoBianco";

  return (
    <div>
      <CartContext.Provider value={{ cart, setCart, qnt, setQnt }}>
        <Router>
          <CssBaseline>
            <Navbar />
            <Route exact path="/">
              <Home greeting={greeting} />
            </Route>
            <Route path="/item/:id">
              <ItemDetailPage />
            </Route>
            <Route path="/cart">
              <Cart />
            </Route>
            <Footer />
          </CssBaseline>
        </Router>
      </CartContext.Provider>
    </div>
  );
}

export default App;
