import React from "react";

import { AuthUserProvider } from "./src/contexts/authUser";
import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => (
  <AuthUserProvider>{element}</AuthUserProvider>
);
