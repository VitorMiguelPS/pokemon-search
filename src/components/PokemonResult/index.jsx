import React, { useState } from "react";
import {
  Typography,
  Grid,
  Paper,
  Button,
  Modal,
  Fade,
  Backdrop,
} from "@material-ui/core";

import { useStyles } from "./styles";

function PokemonResult(props) {
  const classes = useStyles();
  const { pokemonResult } = props;

  const [openModal, setOpenModal] = useState(false);

  console.log(pokemonResult);

  const addOtherImgs = () => {
    for (let i in pokemonResult.sprites) {
    }
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
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
            onClick={handleOpen}
          >
            Details
          </Button>
        </Grid>

        {openModal && (
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={openModal}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <Fade in={openModal}>
              <Grid container className={classes.modalInformations}>
                <Grid className={classes.pokemonModalImg}>
                  <img
                    src={pokemonResult?.sprites.front_default}
                    alt={pokemonResult?.name}
                    className={classes.pokemonModalMainImg}
                  />

                  <Grid className={classes.pokemonModalOtherImg}></Grid>
                </Grid>

                <Grid className={classes.pokemonModalInformations}>
                  <Typography
                    className={classes.pokemonName}
                  >{`Name: ${pokemonResult?.name}`}</Typography>
                </Grid>
              </Grid>
            </Fade>
          </Modal>
        )}
      </Paper>
    </Grid>
  );
}

export default PokemonResult;
