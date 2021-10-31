import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "../styles/home.module.scss";

import SEO from "../components/SEO";
import HeaderComponent from "../components/header";

const IndexPage = () => {
  return (
    <>
      <SEO
        title="SAEC 2021"
        description="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
      />
      <HeaderComponent />

      <main>
        <img alt="Logo SAEC" src="/logo.svg" />
      </main>
    </>
  );
};

export default IndexPage;
