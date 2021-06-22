import { makeStyles } from "@material-ui/styles";

const cartModalStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "14px",
    maxWidth: "40rem",
    margin: "10rem auto",
  },
  card: {
    padding: "1rem",
  },
  actions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  orderBtn: {
    backgroundColor: "#8a2b06",
    color: "white",
    margin: "1rem",
    fontSize: "1.1rem",
    borderRadius: "6px",
  },
  closeBtn: {
    color: "#8a2b06",
    margin: "1rem",
    fontSize: "1.1rem",
    borderRadius: "6px",
  },
}));

export default cartModalStyles;
