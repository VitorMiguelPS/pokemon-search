import { createTheme } from "@material-ui/core";

export const primaryColor = "#fff";
export const secondaryColor = "#daae51";
export const tertiaryColor = "#ED5564";
export const darkYellow = "#B8860B";
export const darkBlue = "#005";
export const whiteColor = "#fff";
export const blackColor = "#000";

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor,
    },
    secondary: {
      main: secondaryColor,
    },
    tertiary: {
      main: tertiaryColor,
    },
  },
  appColors: {
    darkBlue,
    whiteColor,
    blackColor,
    darkYellow,
  },
  typography: {
    fontFamily: ["Geomanist"].join(","),
  },
  pokemonText: {
    fontFamily: "FreePixel",
  },
});

export default theme;
