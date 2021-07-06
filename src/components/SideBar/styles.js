import { makeStyles } from "@material-ui/core";

const whiteColor = "#fff";

export const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  HeaderMenu: {
    borderBottom: `1px solid rgba(255, 255, 255, 0.5)`,
    boxShadow: "none",
    position: "absolute",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    justifyContent: "space-between",
    color: whiteColor,

    "& svg": {
      color: whiteColor,
    },
    "& a": {
      textDecoration: "none",
      width: "auto",
    },
  },
  title: {
    color: whiteColor,
    fontWeight: 700,
    marginLeft: 10,
  },
  loginButton: {
    borderRadius: 20,
    color: "#000 !important",
  },
}));
