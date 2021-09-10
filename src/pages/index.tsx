import * as React from "react";
import * as styles from "./home.module.scss";

const IndexPage = () => {
  return (
    <>
      {" "}
      <h3 className={styles.tag}>Em breve!</h3>
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
