import { makeStyles } from "@material-ui/styles";

const topBarStyles = makeStyles((theme) => ({
  root: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10%",
    backgroundColor: "#8a2b06",
  },
  title: {
    fontWeight: "bold",
    padding: "1.3rem 0",
  },
}));

export default topBarStyles;
