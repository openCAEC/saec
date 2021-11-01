import * as React from "react";
import "./src/styles/global.scss";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme";

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>{element}</ThemeProvider>
);
