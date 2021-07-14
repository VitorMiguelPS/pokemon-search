import { makeStyles } from "@material-ui/core";

const blackColor = "#000";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  HeaderMenu: {
    boxShadow: "none",
    background: "linear-gradient(to top, #79c9fa, #abd4fe, #d0e0ff, #eceeff)",
  },
  toolbar: {
    justifyContent: "space-between",
    color: blackColor,

    "& a": {
      textDecoration: "none",
      width: "auto",
      fontWeight: 700,
    },
  },
  title: {
    color: blackColor,
    fontWeight: 700,
    marginLeft: 10,
  },
  pokeballIcon: {
    width: 20,
  },
}));
