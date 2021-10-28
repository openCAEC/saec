import React from "react";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";

// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./authButton.module.scss";

type AuthButtonProps = {
  id: string;
  title: string;
  color?: string;
  backgroundColor: string;
  iconPath: string;
  onClick: void;
};
const AuthButton = (props: AuthButtonProps) => {
  const _AuthButton = styled(Button)<ButtonProps>(() => ({
    color: props.color ?? "#fff",
    backgroundColor: props.backgroundColor,
    "&:hover": {
      backgroundColor: props.backgroundColor,
    },
  }));

  return (
    <_AuthButton className={styles.button}>
      <img alt={props.title} src={props.iconPath} />
      <span>{props.title}</span>
    </_AuthButton>
  );
};

export default AuthButton;
