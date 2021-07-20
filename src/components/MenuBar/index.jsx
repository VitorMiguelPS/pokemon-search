import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import pokeball from "../../assets/images/pokeball.png";

import { useStyles } from "./styles";

function MenuBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="transparent"
      className={classes.HeaderMenu}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center">
          <img src={pokeball} alt="Pokeball" className={classes.pokeballIcon} />
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Button
            href="https://github.com/VitorMiguelPS/pokemon-search"
            target="_blank"
            color="inherit"
          >
            Github
          </Button>

          <Button
            href="https://www.linkedin.com/in/vitor-mp-silva/"
            target="_blank"
            color="inherit"
          >
            LinkedIn
          </Button>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
