import React, { useEffect, useContext } from "react";
import CartContext from "../../contexts/cartContext";

const CartIcon = () => {
  const { cart, qnt, setQnt } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setQnt(0);
    }
  }, [cart, setQnt]);

  return (
    <div className="cart">
            <span className="material-icons">
                shopping_cart
            </span>
        </div>
  );
};

export default CartIcon;
