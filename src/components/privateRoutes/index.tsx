import React from "react";
import { navigate } from "gatsby";

import AuthUserContext from "../../contexts/authUser";

const PrivateRoute = ({ component: Component, path, ...rest }) => {
  const { authUser } = React.useContext(AuthUserContext);
  const curentUrl = encodeURIComponent(window.location.href);
  if (!authUser) {
    navigate(`/login?${curentUrl}`);
    return null;
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
