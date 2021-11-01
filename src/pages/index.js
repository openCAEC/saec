import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "../styles/home.module.scss";

import SEO from "../components/SEO";
import HeaderComponent from "../components/header";
import { CircularProgress } from "@mui/material";

const IndexPage = () => {
  React.useEffect(() => {
    window.location.replace("https://www.sympla.com.br/saec-ufsc__1398071");
  }, []);
  return (
    <>
      <SEO
        title="SAEC 2021"
        description="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
      />

      <main className={styles.main}>
        <CircularProgress />
      </main>
    </>
  );
};

export default IndexPage;
