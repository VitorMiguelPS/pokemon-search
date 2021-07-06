import { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";

import pokeball from "./assets/images/pokeball.png";
import "./App.css";

import SideBar from "./components/SideBar";

const useStyles = makeStyles(() => ({
  searchDescription: {
    marginTop: 10,
  },
  searchForm: {
    width: 500,
    display: "flex",
    marginTop: 15,
  },
  searchBox: {
    width: "80%",
    "& input": {
      color: "#fff",
    },
    "& fieldset": {
      borderColor: "#fff",
    },
  },
  searchButton: {
    background: "#fff",
  },
  searchResult: {
    marginTop: 20,
  },
}));

function App() {
  const classes = useStyles();

  const [pokemonValue, setPokemonValue] = useState("");
  const [searchedPokemon, setSearchedPokemon] = useState("");

  const getPokemonInformations = async () => {
    try {
      const url = `https://pokeapi.co/api/v2/pokemon/${pokemonValue}`;
      const res = await axios.get(url);

      setSearchedPokemon(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <SideBar />

      <Grid container className="app">
        <img src={pokeball} className="app-logo" alt="logo" />

        <Typography variant="h4" className={classes.searchDescription}>
          Search for any pokemon and learn everything about it
        </Typography>

        <form className={classes.searchForm}>
          <TextField
            variant="outlined"
            id="pokemon"
            name="pokemon"
            className={classes.searchBox}
            value={pokemonValue}
            onChange={(e) => setPokemonValue(e.target.value)}
          />
          <Button
            className={classes.searchButton}
            onClick={getPokemonInformations}
          >
            <Search />
          </Button>
        </form>

        {searchedPokemon && (
          <Grid item className={classes.searchResult}>
            {console.log(searchedPokemon)}
            <Typography>Resultado da busca 1</Typography>

            <Grid container>
              <Typography className={classes.searchResultTitle}>
                {searchedPokemon?.name}
              </Typography>
            </Grid>
          </Grid>
        )}
      </Grid>
    </>
  );
}

export default App;
