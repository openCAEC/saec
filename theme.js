import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    common: { black: "rgba(58, 58, 61, 1)", white: "#fff" },
    background: { paper: "#fff", default: "#fafafa" },
    primary: {
      light: "#7986cb",
      main: "rgba(63, 0, 242, 1)",
      dark: "#303f9f",
      contrastText: "#fff",
    },
    secondary: {
      light: "rgba(255, 83, 104, 1)",
      main: "rgba(237, 49, 72, 1)",
      dark: "rgba(168, 13, 32, 1)",
      contrastText: "#fff",
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff",
    },
    text: {
      primary: "rgba(58, 58, 61, 1)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)",
    },
  },
});
