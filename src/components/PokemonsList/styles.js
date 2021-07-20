import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles((theme) => ({
  pokemonList: {
    marginTop: 50,
    color: "#000",
    width: "100%",
    marginBottom: 50,
  },
  pokemonListResult: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    marginTop: 50,
    justifyItems: "center",
  },
  pokemonInformations: {
    fontFamily: theme.pokemonText.fontFamily,
  },
  pokemonTitle: {
    fontFamily: theme.pokemonText.fontFamily,
    textTransform: "Uppercase",
  },
  pokemonType: {
    fontSize: 20,
  },
  pokemonTypesList: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  pokemonItem: {
    padding: 5,
    marginBottom: 30,
    width: "85%",
  },
  pokemonImg: {
    border: "1px solid black",
    borderRadius: 7,
  },
  pokemonDetailsBtn: {
    background: theme.palette.tertiary.main,
  },
  pokemonMoreBtn: {
    background: theme.palette.secondary.main,
  },
  loadingClass: {
    marginTop: 100,
  },
  loadingImg: {
    width: 100,
  },
}));
