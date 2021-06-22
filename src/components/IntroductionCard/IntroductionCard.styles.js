import { makeStyles } from "@material-ui/styles";

const introductionCardStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    maxWidth: "45rem",
    width: "90%",
    margin: "auto",
    marginTop: "-18rem",
    position: "relative",
    backgroundColor: "#383838",
    color: "white",
    borderRadius: "14px",
    padding: "1rem",
  },
  title: {
    fontWeight: "bold",
    padding: "1rem 0",
  },
}));

export default introductionCardStyles;
