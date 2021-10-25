import * as React from "react";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./login.module.scss";

import SEO from "../../components/SEO";
import AuthComponent from "../../components/auth";
import { allowedUrls } from "./allowed_callback_urls";
import AuthUserContext from "../../contexts/authUser";
import {
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import { navigate } from "gatsby";

const EntrarPage = (props) => {
  const [open, setOpen] = React.useState(false);
  const [redirectUrlOrigin, setRedirectUrlOrigin] = React.useState("");

  const { authUser } = React.useContext(AuthUserContext);

  if (authUser) {
    if (allowedUrls.includes(redirectUrlOrigin)) {
      navigate(redirectUrlOrigin);
    } else {
      navigate("/app");
    }
  }

  React.useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    const redirectUrl = params.get("redirect");

    if (redirectUrl) {
      try {
        const urlOrigin = new URL(redirectUrl).origin;

        setRedirectUrlOrigin(urlOrigin);

        if (!allowedUrls.includes(urlOrigin)) {
          setOpen(true);
          return;
        }

        if (authUser) {
          navigate(redirectUrl);
        }

        console.log(redirectUrl, urlOrigin, allowedUrls.includes(urlOrigin));
      } catch (err) {
        console.error(err);
      }
    }
  }, []);

  return (
    <>
      <SEO
        title="Entrar | SAEC 2021"
        description="Entre em contato com a equipe da SAEC UFSC 2021"
      />

      <main>
        <AuthComponent />
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            Domínio não autorizado
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              O domínio {redirectUrlOrigin} não é autorizado pela equipe da
              SAEC.
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </main>
    </>
  );
};

export default EntrarPage;
