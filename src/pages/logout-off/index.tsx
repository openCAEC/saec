import * as React from "react";

import SEO from "../../components/SEO";
import AuthUserContext from "../../contexts/authUser";
import { auth } from "../../services/initFirebase";
import { signOut } from "firebase/auth";
import { navigate } from "gatsby";

const LogoutPage = () => {
  const { authUser } = React.useContext(AuthUserContext);

  React.useEffect(() => {
    if (authUser) {
      signOut(auth).catch((err) => {
        console.log(err);
      });
    } else {
      navigate("/");
      return null;
    }
  });
  return (
    <>
      <SEO title="Saindo | SAEC 2021" description="" />

      <main>Saindo...</main>
    </>
  );
};

export default LogoutPage;
