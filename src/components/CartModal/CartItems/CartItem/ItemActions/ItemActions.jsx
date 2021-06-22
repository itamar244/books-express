import React from "react";

import { Button } from "@material-ui/core";

const ItemActions = ({ increase, decrease }) => {
  return (
    <div className="item-actions">
      <Button onClick={decrease} variant="outlined" size="small">
        -
      </Button>
      <Button onClick={increase} variant="outlined" size="small">
        +
      </Button>
    </div>
  );
};

export default ItemActions;
