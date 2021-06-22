import React, { useContext, useRef } from "react";

import { Button, Input, InputLabel, FormControl } from "@material-ui/core";

import CartContext from "../../../../store/cart/cart-context";

import bookItemFormStyles from "./BookItemForm.styles";

const BookItemForm = ({ book }) => {
  const classes = bookItemFormStyles();

  const cartCtx = useContext(CartContext);
  const amountRef = useRef();

  const addItemHandler = (e) => {
    e.preventDefault();
    cartCtx.addItem({ ...book, amount: +amountRef.current.value });
    amountRef.current.value = "";
  };

  return (
    <form onSubmit={addItemHandler}>
      <FormControl>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <Input
          inputRef={amountRef}
          id="amount"
          type="number"
          inputProps={{ max: 5, min: 1 }}
          className={classes.input}
          required
        />
        <Button
          type="submit"
          variant="contained"
          color="secondary"
          className={classes.submitBtn}
        >
          + Add
        </Button>
      </FormControl>
    </form>
  );
};

export default BookItemForm;
