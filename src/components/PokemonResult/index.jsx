import React, { useContext } from "react";
import { Typography, Grid, Paper, Button } from "@material-ui/core";

import { ContextCommon } from "../../contexts/common";
import { useStyles } from "./styles";
import ModalDisplay from "../ModalDisplay";

function PokemonResult() {
  const classes = useStyles();

  const {
    pokemonResult,
    setPokemonResult,
    setCurrentImg,
    openModal,
    setOpenModal,
  } = useContext(ContextCommon);

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <Grid item className={classes.searchResultSession}>
      <Paper elevation={3} className={classes.searchResultItem}>
        <Grid className={classes.pokemonMainInformations}>
          <img
            src={pokemonResult?.sprites.front_default}
            alt={pokemonResult?.name}
            className={classes.pokemonImg}
          />

          <Grid className={classes.pokemonInformations}>
            <Typography className={classes.pokemonTitle}>
              {pokemonResult?.name}
            </Typography>
            <Grid className={classes.pokemonTypesList}>
              {pokemonResult?.types?.map((item, index) => (
                <Paper
                  elevation={0}
                  key={index}
                  className={classes.pokemonType}
                >
                  {item.type.name}
                </Paper>
              ))}
            </Grid>
          </Grid>
        </Grid>

        <Grid className={classes.pokemonDetails}>
          <Button
            aria-label="show-more"
            variant="contained"
            className={classes.pokemonDetailsBtn}
            onClick={() => {
              handleOpen();
              setCurrentImg(pokemonResult?.sprites.front_default);
              setPokemonResult(pokemonResult);
            }}
          >
            Details
          </Button>
        </Grid>

        {openModal && <ModalDisplay />}
      </Paper>
    </Grid>
  );
}

export default PokemonResult;
