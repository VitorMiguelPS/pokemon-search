import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  searchResultSession: {
    marginTop: 50,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  searchResultItem: {
    width: "40%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  pokemonMainInformations: {
    display: "flex",
    flexDirection: "row",
  },
  pokemonImg: {
    width: 130,
    border: "1px solid black",
    borderRadius: 7,
  },
  pokemonInformations: {
    marginLeft: 20,
  },
  pokemonTitle: {
    fontFamily: theme.pokemonText.fontFamily,
    textTransform: "capitalize",
    fontSize: 30,
  },
  pokemonTypesList: {
    display: "flex",
    flexDirection: "row",
  },
  pokemonType: {
    fontFamily: theme.pokemonText.fontFamily,
    textTransform: "capitalize",
    fontSize: 15,
    background: "#7FAD71",
    padding: 7,
    color: theme.appColors.whiteColor,
    marginRight: 7,
  },
  pokemonDetails: {
    alignSelf: "flex-end",
  },
  pokemonDetailsBtn: {
    background: theme.palette.tertiary.main,
  },
}));
