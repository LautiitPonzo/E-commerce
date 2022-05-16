import React, { useEffect, useContext } from "react";
import CartContext from "../../contexts/cartContext";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

const CartIcon = () => {
  const { cart, qnt, setQnt } = useContext(CartContext);

  useEffect(() => {
    if (cart.length === 0) {
      setQnt(0);
    }
  }, [cart, setQnt]);

  return (
    <Badge badgeContent={qnt} color="secondary">
      <ShoppingCart />
    </Badge>
  );
};

export default CartIcon;
