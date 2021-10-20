import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "../styles/home.module.scss";

import HeaderComponent from "../components/header";
import SEO from "../components/SEO";

const IndexPage = () => {
  return (
    <>
      <SEO
        title="SAEC 2021"
        description="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
      />

      <HeaderComponent />

      <main className={styles.main}>
        <img className={styles.logo} alt="Logo SAEC" src="/logo.svg" />
      </main>
    </>
  );
};

export default IndexPage;
