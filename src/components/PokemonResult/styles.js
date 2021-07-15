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
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalInformations: {
    backgroundColor: theme.appColors.pokedexColor,
    borderRadius: 20,
    padding: 25,
    width: "50%",
    height: "60%",
  },
  pokemonModalMainImg: {
    width: 200,
    border: `25px solid ${theme.appColors.whiteColor}`,
    backgroundColor: theme.appColors.pokedexBgColor,
  },
  pokemonModalOtherImg: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    border: `3px solid ${theme.appColors.whiteColor}`,
    backgroundColor: theme.appColors.pokedexBgColor,
  },
  pokemonModalTinyImg: {
    width: 70,
    margin: "0 10px",
    cursor: "pointer",
  },
  pokemonModalInformations: {
    color: theme.appColors.whiteColor,
    marginLeft: 50,
    backgroundColor: "#313131",
    width: 305,
    padding: 11,

    "& p": {
      fontFamily: theme.pokemonText.fontFamily,

      "& b": {
        fontSize: 30,
        textTransform: "capitalize",
      },
    },
  },
  pokemonStatsChards: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    marginTop: 10,
  },
  statsName: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  statsNumber: {
    fontSize: 20,
  },
  statsTitle: {
    fontSize: 12,
  },
}));
