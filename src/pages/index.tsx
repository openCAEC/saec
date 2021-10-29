import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "../styles/home.module.scss";

import SEO from "../components/SEO";

import CountdownComponent from "../components/countdown";

const IndexPage = () => {
  return (
    <>
      <SEO
        title="SAEC 2021"
        description="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
      />

      <main className={styles.main}>
        <img className={styles.logo} alt="Logo SAEC" src="/logo.svg" />
        <CountdownComponent />
      </main>
    </>
  );
};

export default IndexPage;
