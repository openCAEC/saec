import * as React from "react";
import * as styles from "./home.module.scss";
import { Helmet } from "react-helmet";

const IndexPage = () => {
  return (
    <>
      <Helmet>
        <title>SAEC 2021 | Em contrução</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Semana Acadêmica de Engenharia de Computação da Universidade Federal de Santa Catarina"
        />
      </Helmet>
      <h3 className={styles.tag}>Em breve!</h3>
      <main className={styles.main}>
        <title>SAEC 2021 | Em contrução</title>

        <img className={styles.logo} alt="Logo SAEC" src="/logo.svg" />

        <div className={styles.socialMedia}>
          <h3>Siga-nos nas redes sociais</h3>
          <h1>/saecufscara</h1>
        </div>
      </main>
      <footer className="footer py-3 shadow-lg grafite">
        <div className="container">
          <div className="row align-items-center justify-content-lg-between">
            <ul className="list-group list-group-flush">
              <li className="list-group-item col-12 grafite border-white">
                <ul className="nav nav-footer nav-fill align-items-center">
                  <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                      <img
                        className="m-2"
                        alt="Logo SAEC"
                        height="50"
                        width="120"
                        src="/logo.svg"
                      />
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-light" aria-current="page" href="#">
                      SAECHTHON
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-light" href="#">
                      SAEC gameday
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link link-light" href="#">
                      Recursos
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link btn btn-lg btn-primary btn-neo border-0 link-light" href="#">
                      Inscreva-se
                    </a>
                  </li>
                </ul>
              </li>
              <li className="list-group-item col-12 grafite border-white container">
                <div className="row align-items-center">
                  <a
                    href="https://github.com/openCAEC/saec.ufsc.br/blob/main/LICENSE"
                    className="col-3 nav-link link-light"
                  >
                    <img
                      src="/law.svg"
                      className="mx-2"
                      height="16"
                      width="16"
                      alt="law"
                    />
                    AGPL-3.0
                  </a>
                  <ul className="col-9 d-flex justify-content-around me-auto ">
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        <img
                          alt="Siga-nos no Facebook"
                          height="24"
                          width="24"
                          src="/face.svg"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link text-muted"
                        target="_blank"
                      >
                        <img
                          alt="Siga-nos no Instagram"
                          height="24"
                          width="24"
                          src="/insta.svg"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        <img
                          alt="Siga-nos no Twitter"
                          height="24"
                          width="24"
                          src="/twitter.svg"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        <img
                          alt="Siga-nos no LinkedIn"
                          height="24"
                          width="24"
                          src="/linkedIn.svg"
                        />
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        href="#"
                        className="nav-link pe-0 text-muted"
                        target="_blank"
                      >
                        <img
                          alt="Siga-nos no Youtube"
                          height="24"
                          width="24"
                          src="/youtube.svg"
                        />
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default IndexPage;
