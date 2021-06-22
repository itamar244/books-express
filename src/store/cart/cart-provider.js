import React, { useReducer } from "react";
import { ADD_ITEM, REMOVE_ITEM } from "./actions";

import CartContext from "./cart-context";
import { cartReducer, initialState } from "./cart-reducer";

const CartProvider = ({ children }) => {
  const [cartState, dispatchItems] = useReducer(cartReducer, initialState);

  const addItem = (item) => {
    dispatchItems({ type: ADD_ITEM, item });
  };

  const removeItem = (itemId) => {
    dispatchItems({ type: REMOVE_ITEM, itemId });
  };

  const cartContext = {
    items: cartState.items,
    addItem,
    removeItem,
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
};

export default CartProvider;
