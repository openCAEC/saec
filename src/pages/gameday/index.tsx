import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./gameday.module.scss";
import { Helmet } from "react-helmet";

import HeaderComponent from "../../components/header";

const GameDayPage = () => {
  return (
    <>
      <Helmet>
        <title>SAEC GAMEDAY | SAEC 2021</title>
        <meta name="description" content="Venha participar SAEC GAMEDAY!" />
      </Helmet>
      <HeaderComponent />

      <main className={styles.main}>GameDay</main>
    </>
  );
};

export default GameDayPage;
