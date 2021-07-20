import React from "react";
import { Grid } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";

import "./App.css";
import theme from "./styles/theme";
import { ProviderCommon } from "./contexts/common";

import HomeDisplay from "./components/HomeDisplay";
import SearchInput from "./components/SearchInput";
import MenuBar from "./components/MenuBar";
import PokemonsList from "./components/PokemonsList";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProviderCommon>
        <MenuBar />

        <Grid container className="app">
          <HomeDisplay />

          <SearchInput />

          <PokemonsList />
        </Grid>
      </ProviderCommon>
    </ThemeProvider>
  );
}

export default App;
