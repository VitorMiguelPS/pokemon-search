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
import clsx from "clsx";

import { useStyles } from "./styles";

function PokemonResult(props) {
  const classes = useStyles();
  const { pokemonResult } = props;

  const [openModal, setOpenModal] = useState(false);
  const [currentImg, setCurrentImg] = useState("");

  console.log(pokemonResult);

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
            onClick={() => {
              handleOpen();
              setCurrentImg(pokemonResult?.sprites.front_default);
            }}
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
                    src={currentImg}
                    alt={pokemonResult?.name}
                    className={classes.pokemonModalMainImg}
                  />

                  <Grid className={classes.pokemonModalOtherImg}>
                    <img
                      src={pokemonResult?.sprites.front_default}
                      alt={pokemonResult?.name}
                      className={classes.pokemonModalTinyImg}
                      onClick={() =>
                        setCurrentImg(pokemonResult?.sprites.front_default)
                      }
                    />

                    <img
                      src={pokemonResult?.sprites.back_default}
                      alt={pokemonResult?.name}
                      className={classes.pokemonModalTinyImg}
                      onClick={() =>
                        setCurrentImg(pokemonResult?.sprites.back_default)
                      }
                    />
                  </Grid>
                </Grid>

                <Grid className={classes.pokemonModalInformations}>
                  <Typography className={classes.pokemonName}>
                    {`name: `}
                    <b>{pokemonResult?.name}</b>
                  </Typography>
                  <Typography className={classes.pokemonHeight}>
                    {`Height: `}
                    <b>{`${pokemonResult?.height / 10} m`}</b>
                  </Typography>
                  <Typography className={classes.pokemonWeight}>
                    {`Weight: `}
                    <b>{`${pokemonResult?.weight / 10} kg`}</b>
                  </Typography>
                  <Typography className={classes.pokemonStats}>
                    {`Stats: `}
                  </Typography>

                  <Grid className={classes.pokemonStatsChards}>
                    {pokemonResult?.stats.map((item, index) => (
                      <Grid
                        key={index}
                        className={clsx(item.stat.name, classes.statsName)}
                      >
                        <Typography className={classes.statsNumber}>
                          {item.base_stat}
                        </Typography>
                        <Typography className={classes.statsTitle}>
                          {item.stat.name}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
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
