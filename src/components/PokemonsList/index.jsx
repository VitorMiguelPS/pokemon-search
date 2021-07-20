import React, { useState, useEffect, useContext, memo } from "react";
import { Button, Grid, Typography, Paper } from "@material-ui/core";
import axios from "axios";

import { ContextCommon } from "../../contexts/common";
import useRequest from "../../hooks/useRequest";
import { useStyles } from "./styles";

function PokemonsList() {
  const classes = useStyles();
  const { getPokemonInformations } = useRequest();

  const { setOpenModal, setCurrentImg, setPokemonResult } =
    useContext(ContextCommon);

  const [pokemonsList, setPokemonsList] = useState([]);
  const [pokemonsPagination, setPokemonsPaginations] = useState(15);

  const sliceList = pokemonsList?.slice(0, pokemonsPagination);

  const handleOpen = () => {
    setOpenModal(true);
  };

  useEffect(() => {
    const getPokemonsList = async () => {
      try {
        const url = `https://pokeapi.co/api/v2/pokemon/?limit=150`;
        const res = await axios.get(url);
        const pokeListArr = [];

        for (let i in res.data.results) {
          const pokeResult = getPokemonInformations(
            res.data.results[i].name,
            "listResult"
          );

          pokeListArr.push(pokeResult);
        }

        Promise.all(pokeListArr).then((pokemons) => {
          setPokemonsList(pokemons);
        });
      } catch (e) {
        console.log(e);
      }
    };

    getPokemonsList();
  });

  return (
    <>
      {pokemonsList && (
        <Grid className={classes.pokemonList}>
          <Typography variant="h4">List of all Pokemons</Typography>

          <Grid className={classes.pokemonListResult}>
            {sliceList?.map((item, index) => (
              <Paper key={index} elevation={3} className={classes.pokemonItem}>
                <Grid className={classes.pokemonMainInformations}>
                  <img
                    src={item?.sprites?.front_default}
                    alt={item?.name}
                    className={classes.pokemonImg}
                  />

                  <Grid className={classes.pokemonInformations}>
                    <Typography className={classes.pokemonTitle}>
                      {item?.name}
                    </Typography>

                    <Button
                      aria-label="show-more"
                      variant="contained"
                      className={classes.pokemonDetailsBtn}
                      onClick={() => {
                        handleOpen();
                        setCurrentImg(item?.sprites.front_default);
                        setPokemonResult(item);
                      }}
                    >
                      Details
                    </Button>
                  </Grid>
                </Grid>
              </Paper>
            ))}
          </Grid>

          <Grid className={classes.pokemonLoadBtn}>
            <Button
              aria-label="show-more"
              variant="contained"
              className={classes.pokemonMoreBtn}
              onClick={() => setPokemonsPaginations(pokemonsPagination + 15)}
              disabled={pokemonsPagination >= 150 ? true : false}
            >
              Load more
            </Button>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default memo(PokemonsList);
