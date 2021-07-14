import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  searchDescription: {
    marginTop: 10,
  },
  searchForm: {
    width: 500,
    display: "flex",
    marginTop: 15,
  },
  searchBox: {
    width: "90%",
    "& input": {
      color: "#000",
      background: "#fff",
      borderRadius: 7,
    },
    "& fieldset": {
      borderColor: "transparent",
    },
  },
  searchButton: {
    background: theme.palette.secondary.main,
    marginLeft: 7,

    "&:hover": {
      background: theme.appColors.darkYellow,
    },
  },
}));
