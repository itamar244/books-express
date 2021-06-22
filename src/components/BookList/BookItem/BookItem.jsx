import React from "react";

import { ListItem } from "@material-ui/core";

import BookItemInfo from "./BookItemInfo";
import BookItemForm from "./BookItemForm/BookItemForm";

import bookItemStyles from "./BookItem.styles";

const BookItem = ({ book }) => {
  const classes = bookItemStyles();

  return (
    <ListItem divider className={classes.root}>
      <BookItemInfo book={book} />
      <BookItemForm book={book} />
    </ListItem>
  );
};

export default BookItem;
