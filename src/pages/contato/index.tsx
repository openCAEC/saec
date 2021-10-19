import * as React from "react";
import * as styles from "./contato.module.scss";
import { Helmet } from "react-helmet";

import HeaderComponent from "../../components/header";

const ContatoPage = () => {
  return (
    <>
      <Helmet>
        <title>Contato | SAEC 2021</title>
        <meta
          name="description"
          content="Entre em contato com a equipe da Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
        />
      </Helmet>
      <HeaderComponent />

      <main className={styles.main}></main>
    </>
  );
};

export default ContatoPage;
