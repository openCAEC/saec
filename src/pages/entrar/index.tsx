import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./entrar.module.scss";

import HeaderComponent from "../../components/header";
import SEO from "../../components/SEO";

const EntrarPage = () => {
  return (
    <>
      <SEO
        title="Entrar | SAEC 2021"
        description="Entre em contato com a equipe da SAEC UFSC 2021"
      />
      <HeaderComponent />

      <main className={styles.main}>Entrar</main>
    </>
  );
};

export default EntrarPage;
