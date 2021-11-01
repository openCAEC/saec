import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./gameday.module.scss";

import SEO from "../../components/SEO";
import HeaderComponent from "../../components/header";

const GameDayPage = () => {
  return (
    <>
      <SEO
        title="SAEC GAMEDAY | SAEC 2021"
        description="Venha participar SAEC GAMEDAY!"
      />
      <div className={styles.gameday}>
        <div className={styles.hero}>
          <HeaderComponent />
          <section className={styles.map}>
            <h1 className={styles.title}>SAEC Game Day</h1>
            <p>A SAEC de um jeito que você nunca viu!</p>
          </section>
        </div>

        <main className={styles.gameday}>
          <section>SAEC a maior que nós temos</section>
        </main>
      </div>
    </>
  );
};

export default GameDayPage;
