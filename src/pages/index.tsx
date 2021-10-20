import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./home.module.scss";
import { Helmet } from "react-helmet";
import HeaderComponent from "../components/header";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>SAEC 2021 | Em contrução</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
        />
      </Helmet>
      <HeaderComponent />

      <main className={styles.main}>
        <title>SAEC 2021 | Em contrução</title>

        <img className={styles.logo} alt="Logo SAEC" src="/logo.svg" />

        <div className={styles.socialMedia}>
          <h3>Siga-nos nas redes sociais</h3>
          <h1>/saecufscara</h1>
        </div>
      </main>
    </>
  );
};

export default IndexPage;
