import React from "react";
import { navigate } from "gatsby";

import AuthUserContext from "../../contexts/authUser";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { authUser } = React.useContext(AuthUserContext);
  const curentUrl = encodeURIComponent(window.location.pathname);
  if (!authUser) {
    navigate(`/login?navigate=${curentUrl}`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
