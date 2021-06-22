import { makeStyles } from "@material-ui/styles";

const bookItemInfoStyles = makeStyles((theme) => ({
  bookInformation: {
    display: "flex",
    flexDirection: "column",
  },
  title: {
    fontSize: "1.1rem",
    fontWeight: "bold",
    margin: "4px 0",
  },
  author: {
    fontStyle: "italic",
    margin: "4px 0",
  },
  price: {
    fontWeight: "bold",
    margin: "4px 0",
    color: "#ad5502",
  },
}));

export default bookItemInfoStyles;
