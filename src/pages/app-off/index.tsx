import React from "react";
import { Router } from "@reach/router";
import PrivateRoute from "../../components/privateRoutes";
import ContatoPage from "../contato";

const App = () => {
  return (
    <Router basepath="/app">
      <PrivateRoute path="/" component={ContatoPage} />
    </Router>
  );
};

export default App;
