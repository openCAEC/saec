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

      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Como você prefere falar com a gente?</h1>
        </header>

        <div className={styles.contactInfo}>
          <div className={styles.email}>
            <h5>E-mail</h5>
            <p>
              Tem alguma dúvida podemos te ajudar pelo nosso canal de e-mail.
            </p>
            <a>email</a>
          </div>

          <div className={styles.telephone}>
            <h5>Telefone</h5>
            <p>Você pode ligar no 0800 da SAEC....ou não.</p>
            <a>Telefone</a>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.followSaec}>
          <div className={styles.content}>
            <h5>Siga o @saecufscara</h5>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <div className={styles.socialIconsWrapper}></div>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.complaint}>
          <div className={styles.text}>
            <h2>Canal de denúncia</h2>
            <p>Sem tempo irmão, denuncia o loco </p>
            <a>Link para o forms</a>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.sugestions}>
          <div className={styles.text}>
            <h5>Críticas e sugestões</h5>
            <p className={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <a>Link para o forms</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContatoPage;
