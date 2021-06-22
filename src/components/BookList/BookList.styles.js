import { makeStyles } from "@material-ui/styles";

const bookListStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "70rem",
    width: "90%",
    margin: "2rem auto",
    borderRadius: "14px",
    padding: "1rem",
    animation: "$books-appear 1s ease-out forwards",
  },
  "@keyframes books-appear": {
    from: {
      opacity: "0",
      transform: "translateY(3rem)",
    },
    to: {
      opacity: "1",
      transform: "translateY(0)",
    },
  },
}));

export default bookListStyles;
