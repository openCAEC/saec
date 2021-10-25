import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./login.module.scss";

import SEO from "../../components/SEO";
import AuthComponent from "../../components/auth";

import AuthUserContext from "../../contexts/authUser";

import { navigate } from "gatsby";

const EntrarPage = (props) => {
  const [navigatePathUrl, setNavigatePathUrl] = React.useState("");
  const { authUser } = React.useContext(AuthUserContext);

  if (authUser) {
    if (navigatePathUrl != "") {
      navigate(navigatePathUrl);
    } else {
      navigate("/app");
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const navigatePathUrlParam = params.get("navigate");
    const decodedNavigatePathUrlParam =
      decodeURIComponent(navigatePathUrlParam);

    setNavigatePathUrl(decodedNavigatePathUrlParam);

    if (authUser) {
      if (navigatePathUrl != "") {
        navigate(navigatePathUrl);
      } else {
        navigate("/app");
      }
    }
  }, []);

  return (
    <>
      <SEO
        title="Entrar | SAEC 2021"
        description="Entre em contato com a equipe da SAEC UFSC 2021"
      />

      <main>
        <AuthComponent />
      </main>
    </>
  );
};

export default EntrarPage;
