import { makeStyles } from "@material-ui/styles";

const cartItemStyles = makeStyles((theme) => ({
  cartItem: {
    display: "flex",
    justifyContent: "space-between",
    padding: "16px 0",
  },
  name: {
    fontSize: "1rem",
    fontWeight: "bold",
  },
  price: {
    color: "#ad5502",
    fontWeight: "bold",
    padding: "0 16px 0 0",
  },
  amount: {
    padding: "4px",
    border: "1px solid #ad5502",
    borderRadius: "8px",
    fontWeight: "bold",
  },
  amountSection: {
    marginTop: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

export default cartItemStyles;
