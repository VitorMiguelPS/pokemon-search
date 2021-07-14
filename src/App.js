import React from "react";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import theme from "./styles/theme";

import HomeDisplay from "./components/HomeDisplay";
import SearchInput from "./components/SearchInput";
import MenuBar from "./components/MenuBar";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MenuBar />

      <Grid container className="app">
        <HomeDisplay />

        <SearchInput />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
