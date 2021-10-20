import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./entrar.module.scss";
import { Helmet } from "react-helmet";

import HeaderComponent from "../../components/header";

const EntrarPage = () => {
  return (
    <>
      <Helmet>
        <title>Entrar | SAEC 2021</title>
        <meta
          name="description"
          content="Entre na plataforma da SAEC UFSC 2021"
        />
      </Helmet>
      <HeaderComponent />

      <main className={styles.main}>Entrar</main>
    </>
  );
};

export default EntrarPage;
