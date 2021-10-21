import React from "react";
import HeaderComponent from "./src/components/header";

import { AuthUserProvider } from "./src/contexts/authUser";
import "./src/styles/global.scss";

export const wrapRootElement = ({ element }) => (
  <AuthUserProvider>
    <HeaderComponent />
    {element}
  </AuthUserProvider>
);
