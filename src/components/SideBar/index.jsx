import React from "react";
import { AppBar, Toolbar, Typography, Button, Grid } from "@material-ui/core";
import { SportsBaseball } from "@material-ui/icons";

import { useStyles } from "./styles";

function SideBar() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="transparent"
      className={classes.HeaderMenu}
    >
      <Toolbar className={classes.toolbar}>
        <Grid container alignItems="center">
          <SportsBaseball />
          <Typography variant="h6" className={classes.title}>
            Pokedex
          </Typography>
        </Grid>

        <Grid container justifyContent="flex-end">
          <Button
            href="https://github.com/VitorMiguelPS"
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

export default SideBar;
