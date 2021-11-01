import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./discord.module.scss";

import SEO from "../../components/SEO";
import HeaderComponent from "../../components/header";
import { CircularProgress, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

const axios = require("axios");

const DiscordPage = (props) => {
  const [values, setValues] = React.useState({
    isLoading: true,
    isLoadingRequest: false,
    ticket: "",
    errorMessage: "",
  });

  React.useEffect(() => {
    const url = props.location.href.replace("#");
    const params = new URLSearchParams(url);
    const discordAccessToken = params.get("access_token");
    const discordState = params.get("state");

    if (discordAccessToken && discordState) {
      axios
        .get("https://saecserver.vercel.app/api/discord", {
          params: {
            discordToken: discordAccessToken,
            state: discordState,
          },
        })
        .then(function (response) {
          window.location.replace("https://discord.gg/BBT793wT87");
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      console.log("B");
      setValues({
        ...values,
        isLoading: false,
      });
    }
  }, []);

  const handleChange = (event) => {
    setValues({ ...values, ticket: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      ...values,
      isLoadingRequest: true,
      errorMessage: "",
    });
    console.log(values);
    axios
      .get("https://saecserver.vercel.app/api/verifyTicket", {
        params: {
          ticket: values.ticket,
        },
      })
      .then(function (response) {
        console.log(response);
        let currentLocation = encodeURIComponent(window.location.href);
        let discordClient = "883131427925938247";
        let state = response.data.ticket_number;
        window.location.replace(
          `https://discord.com/api/oauth2/authorize?client_id=${discordClient}&state=${state}&redirect_uri=${currentLocation}&response_type=token&scope=identify%20email%20guilds.join`
        );
      })
      .catch(function (error) {
        console.error(error, error.response.data);

        setValues({
          ...values,
          isLoadingRequest: false,
          errorMessage: error.response.data.msg,
        });
      });
  };

  return (
    <>
      <SEO
        title="Discord | SAEC 2021"
        description="Junte-se ao servidor do discord da SAEC!"
      />

      {values.isLoading ? (
        <_Loading />
      ) : (
        <_InputTicket
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isLoadingRequest={values.isLoadingRequest}
          errorMessage={values.errorMessage}
        />
      )}
    </>
  );
};

export default DiscordPage;

const _InputTicket = ({
  handleChange,
  handleSubmit,
  isLoadingRequest,
  errorMessage,
}) => {
  return (
    <main className={styles.main}>
      <div className={styles.ticket}>
        <div className={styles.conection}>
          <div className={styles.imgContainer}>
            <img src="/social/discord.svg" alt="Logo Discord" />
          </div>
          <div className={styles.stage} data-title=".dot-flashing">
            <div className={styles.stage}>
              <div className={styles.dotflashing}></div>
            </div>
          </div>
          <div className={styles.imgContainer}>
            <img src="/logo_default.svg" alt="Logo Discord" />
          </div>
        </div>

        <form onSubmit={(e) => handleSubmit(e)}>
          <h2>Servidor do Discord SAEC</h2>
          <p>
            Para entrar no super servidor do Discord da SAEC 2021 é necessário
            estar{" "}
            <a
              target="_blank"
              href="https://www.sympla.com.br/saec-ufsc__1398071"
              rel="noreferrer"
            >
              inscrito(a) no evento pela sympla
            </a>
            . Informe o número do ingresso da sua inscrição (vocês provavelmente
            rescebeu ele por email).
          </p>
          <TextField
            id="ticket"
            className={styles.input}
            label="Nº do ingresso"
            variant="outlined"
            onChange={handleChange}
            disabled={isLoadingRequest}
            helperText={errorMessage}
            error={errorMessage != ""}
          />
          <LoadingButton
            loading={isLoadingRequest}
            type="submit"
            variant="outlined"
          >
            Próximo
          </LoadingButton>
        </form>
      </div>
    </main>
  );
};

const _Loading = () => {
  return (
    <main className="loaderContainer full">
      <CircularProgress />
    </main>
  );
};
