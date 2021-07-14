import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";
import axios from "axios";

import { useStyles } from "./styles";
import PokemonResult from "../PokemonResult";

function SearchInput() {
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
          color="primary"
          onClick={getPokemonInformations}
        >
          <Search />
        </Button>
      </form>

      {searchedPokemon && <PokemonResult pokemonResult={searchedPokemon} />}
    </>
  );
}

export default SearchInput;
