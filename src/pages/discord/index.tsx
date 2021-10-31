import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./discord.module.scss";

import SEO from "../../components/SEO";
import HeaderComponent from "../../components/header";
import { CircularProgress, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import verifyTicket from "../../services/verifyTicket";

const DiscordPage = (props) => {
  const [values, setValues] = React.useState({
    isLoading: true,
    ticket: "",
  });

  React.useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const discordAccessToken = params.get("access_token");
    const discordState = params.get("state");

    if (discordAccessToken && discordState) {
      console.log("A");
      // já recebeu o token
      // discord();
      // se deu certo encaminha pro invite
      alert("Add vc no server do discord");
    } else {
      console.log("B");
      setValues({
        ...values,
        isLoading: false,
      });
    }
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, ticket: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyTicket(values.ticket)
      .then((response) => {
        // redireciona url do discord
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <SEO
        title="Discord | SAEC 2021"
        description="Junte-se ao servidor do discord da SAEC!"
      />
      <HeaderComponent />

      {values.isLoading ? (
        <_Loading />
      ) : (
        <_InputTicket handleChange={handleChange} handleSubmit={handleSubmit} />
      )}
    </>
  );
};

export default DiscordPage;

const _InputTicket = ({ handleChange, handleSubmit }) => {
  return (
    <main className={styles.main}>
      <form onSubmit={(e) => handleSubmit(e)}>
        <TextField
          id="ticket"
          label="Nº do ingresso"
          variant="outlined"
          onChange={handleChange}
        />
        <LoadingButton type="submit" variant="outlined">
          Próximo
        </LoadingButton>
      </form>
    </main>
  );
};

const _Loading = () => {
  return (
    <main className={styles.main}>
      <CircularProgress />
    </main>
  );
};
