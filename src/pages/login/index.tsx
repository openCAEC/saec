import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./login.module.scss";

import SEO from "../../components/SEO";
import AuthComponent from "../../components/authPasswordProvider";

import AuthUserContext from "../../contexts/authUser";

import { navigate } from "gatsby";
import AuthButton from "../../components/authButton";

const EntrarPage = (props) => {
  const [navigatePathUrl, setNavigatePathUrl] = React.useState(
    null as null | string
  );
  const { authUser } = React.useContext(AuthUserContext);

  if (authUser) {
    if (navigatePathUrl) {
      navigate(navigatePathUrl);
      return null;
    } else {
      navigate("/app");
      return null;
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const navigatePathUrlParam = params.get("navigate");
    const decodedNavigatePathUrlParam =
      decodeURIComponent(navigatePathUrlParam);

    setNavigatePathUrl(decodedNavigatePathUrlParam);
  }, []);

  function handleClick(provider) {
    console.log("Provider: ", provider);
  }

  return (
    <>
      <SEO
        title="Entrar | SAEC 2021"
        description="Entre em contato com a equipe da SAEC UFSC 2021"
      />

      <main>
        <AuthComponent />
        <AuthButton
          id="github"
          title="Github"
          iconPath="/social/github.svg"
          backgroundColor="#1B1817"
          onClick={handleClick("github")}
        />
      </main>
    </>
  );
};

export default EntrarPage;
