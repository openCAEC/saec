import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./gameday.module.scss";

import HeaderComponent from "../../components/header";
import SEO from "../../components/SEO";

const GameDayPage = () => {
  return (
    <>
      <SEO
        title="SAEC GAMEDAY | SAEC 2021"
        description="Venha participar SAEC GAMEDAY!"
      />
      <HeaderComponent />

      <main className={styles.main}>GameDay</main>
    </>
  );
};

export default GameDayPage;
