import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./contato.module.scss";

import SEO from "../../components/SEO";
import SocialMediaComponent from "../../components/socialMedia";

const LinkIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"></path>
  </svg>
);

const ContatoPage = () => {
  return (
    <>
      <SEO
        title="Contato | SAEC 2021"
        description="Entre em contato com a equipe da SAEC UFSC 2021"
      />

      <section className={styles.contactHeader}>
        <h1>Vamos conversar?</h1>
      </section>

      <main className={styles.main}>
        <div className={`${styles.box} box x center`}>
          <div className={styles.boxItem}>
            <h3>E-mail</h3>
            <p>
              Tem alguma dúvida podemos te ajudar pelo nosso canal de e-mail.
            </p>
            <div className={styles.link}>
              <a target="_blank" href="mailto:saecufscara@gmail.com">
                saecufscara@gmail.com
                <LinkIcon />
              </a>
            </div>
          </div>

          <div className={styles.boxItem}>
            <h3>WhatsApp</h3>
            <p>
              Vem de zap SAEC! Entre em contato com a equipe do SAEC por meio do
              perfil oficial da SAEC no WhatsApp.
            </p>
            <div className={styles.link}>
              <a
                className={styles.link}
                target="_blank"
                href="https://api.whatsapp.com/send?phone=554833633522&text=Ol%C3%A1%20equipe%20SAEC%2C%20tudo%20bem%3F"
              >
                +55 (19) 3363-3522
                <LinkIcon />
              </a>
            </div>
          </div>
          <div className={styles.boxItem}>
            <h3>Discord</h3>
            <p>
              A edição 2021 da SAEC conta com um servidor no Discord. Encontre a
              equipe de Staffs da SAEC nos canais de suporte!{" "}
            </p>
            <div className={styles.link}>
              <a className={styles.link} target="_blank" href="">
                Comunidade no Discord
                <LinkIcon />
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.itemUno}>
          <div className={styles.content}>
            <h3>
              Siga <span className="color aroxo">@saecufscara</span> nas redes!
            </h3>

            <p>A SAEC está em todas! Siga-nos nas redes sociais.</p>
            <div className={styles.socialMediaContainer}>
              <SocialMediaComponent />
            </div>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.itemUno}>
          <div className={styles.text}>
            <h3>Canal de denúncia</h3>
            <p>
              Viu alguma atitude negativa durante a SAEC ou algo que aconteceu
              te atingiu ou atingiu alguém ao seu redor? Não se cale! Formalize
              uma denuncia para a equipe de coordenação da SAEC.
            </p>
            <div className={styles.link}>
              <a
                className={styles.link}
                target="_blank"
                href="https://forms.gle/Q44sNt3AFf9dYQZ26"
              >
                Formulário de denúncias
                <LinkIcon />
              </a>
            </div>
          </div>
        </div>

        <hr className={styles.divider}></hr>

        <div className={styles.itemUno}>
          <div className={styles.text}>
            <h3>Críticas e sugestões</h3>
            <p className={styles.text}>
              Deseja fazer algum comentário para a equipe da SAEC ou passar
              algum feedback? Ou então contar para nós um pouco da sua
              experiência no evento? Quem sabe apenas dar um biscoito pra equipe
              organizadora da SAEC 2021?!
            </p>
            <div className={styles.link}>
              <a
                className={styles.link}
                target="_blank"
                href="https://forms.gle/ALKrmNNX4fYZVMfn9"
              >
                Formulário críticas e sugestões
                <LinkIcon />
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ContatoPage;
