import React from "react";
import { Typography } from "@material-ui/core";

import pokeball from "../../assets/images/pokeball.png";

import { useStyles } from "./styles";

function HomeDisplay() {
  const classes = useStyles();

  return (
    <>
      <img src={pokeball} className="app-logo" alt="logo" />

      <Typography variant="h4" className={classes.searchDescription}>
        Search for any pokemon and learn everything about it
      </Typography>
    </>
  );
}

export default HomeDisplay;
