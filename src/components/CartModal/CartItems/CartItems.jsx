import React, { useContext } from "react";
import { List } from "@material-ui/core";

import CartContext from "../../../store/cart/cart-context";
import CartItem from "./CartItem/CartItem";

const CartItems = () => {
  const cartCtx = useContext(CartContext);

  const cartItems = cartCtx.items.map((item) => (
    <CartItem key={item.id} item={item} />
  ));

  return <List>{cartItems}</List>;
};

export default CartItems;
