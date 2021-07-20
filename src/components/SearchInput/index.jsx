import React, { useState, useContext } from "react";
import { TextField, Button } from "@material-ui/core";
import { Search } from "@material-ui/icons";

import useRequest from "../../hooks/useRequest";
import { ContextCommon } from "../../contexts/common";
import { useStyles } from "./styles";
import PokemonResult from "../PokemonResult";

function SearchInput() {
  const classes = useStyles();
  const { getPokemonInformations } = useRequest();

  const { pokemonResult } = useContext(ContextCommon);

  const [pokemonValue, setPokemonValue] = useState("");

  const getPokemonWithEnter = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      getPokemonInformations(pokemonValue, "uniqueResult");
    }
  };

  const getPokemonRequest = async () => {
    getPokemonInformations(pokemonValue, "uniqueResult");
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
          onKeyPress={(e) => getPokemonWithEnter(e)}
        />
        <Button
          className={classes.searchButton}
          color="primary"
          onClick={getPokemonRequest}
        >
          <Search />
        </Button>
      </form>

      {pokemonResult && <PokemonResult />}
    </>
  );
}

export default SearchInput;
