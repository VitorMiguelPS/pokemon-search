import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
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
    justifyContent: "space-between",
  },
  pokemonModalImg: {
    width: "40%",
    height: "100%",
  },
  pokemonModalMainImg: {
    width: "80%",
    border: `27px solid ${theme.appColors.whiteColor}`,
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
    backgroundColor: "#313131",
    width: "50%",
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
