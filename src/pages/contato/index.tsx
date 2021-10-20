import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./contato.module.scss";

import HeaderComponent from "../../components/header";
import SEO from "../../components/SEO";

const ContatoPage = () => {
  return (
    <>
      <SEO
        title="Contato | SAEC 2021"
        description="Entre em contato com a equipe da SAEC UFSC 2021"
      />

      <HeaderComponent />

      <main className={styles.main}>Contato</main>
    </>
  );
};

export default ContatoPage;
