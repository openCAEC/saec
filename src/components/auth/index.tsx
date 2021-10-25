import React from "react";
import {
  FormControl,
  FormHelperText,
  Icon,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../services/initFirebase";

type ErrorMessage = {
  default: string | null;
  email: string | null;
  password: string | null;
};
interface State {
  isLoading: boolean;
  errorMessage: ErrorMessage;
  email: string;
  password: string;
  showPassword: boolean;
}

const AuthComponent = (props) => {
  const [values, setValues] = React.useState<State>({
    isLoading: false,
    errorMessage: {
      default: null,
      email: null,
      password: null,
    },
    email: "",
    password: "",
    showPassword: false,
  });

  const handleChange =
    (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({
        ...values,
        [prop]: event.target.value,
        errorMessage: {
          default: null,
          email: null,
          password: null,
        },
      });
    };

  const clearErrorValues = () => {
    setValues({
      ...values,
      errorMessage: {
        default: null,
        email: null,
        password: null,
      },
    });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearErrorValues();

    if (validateForm()) {
      setValues({
        ...values,
        isLoading: true,
      });

      signInWithEmailAndPassword(auth, values.email, values.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
        })
        .catch((error) => {
          console.error(error);
          const errorCode = error.code;
          let errorMessage = { ...values.errorMessage } as ErrorMessage;

          switch (errorCode) {
            case "auth/user-not-found":
              errorMessage.default = "Usuário não encontrado!";
              errorMessage.email = "";
              break;

            default:
              break;
          }

          setValues({
            ...values,
            errorMessage: errorMessage,
            isLoading: false,
          });
        });
    }
  };

  const validateForm = () => {
    setValues({
      ...values,
      errorMessage: {
        ...values.errorMessage,
        password: !values.password
          ? "Preencha este campo!"
          : values.password.length < 6
          ? "Senha incorreta"
          : null,
        email: !values.email
          ? "Preencha este campo!"
          : /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)
          ? null
          : "Insira um endereço de email válido!",
      },
    });

    return !!(values.email && values.password && values.password.length >= 6);
  };
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
        <InputLabel error={values.errorMessage.email != null} htmlFor="email">
          Email
        </InputLabel>
        <OutlinedInput
          id="email"
          type="email"
          value={values.email}
          onChange={handleChange("email")}
          error={values.errorMessage.email != null}
          label="Email"
        />
        {values.errorMessage.email != null && (
          <FormHelperText error id="email">
            {values.errorMessage.email}
          </FormHelperText>
        )}
      </FormControl>

      <FormControl sx={{ m: 1, width: "30ch" }} variant="outlined">
        <InputLabel error={!!values.errorMessage.password} htmlFor="password">
          Senha
        </InputLabel>
        <OutlinedInput
          id="password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          error={!!values.errorMessage.password}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? (
                  <Icon>visibility_off</Icon>
                ) : (
                  <Icon>visibility</Icon>
                )}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
        {values.errorMessage.password && (
          <FormHelperText error id="password">
            {values.errorMessage.password}
          </FormHelperText>
        )}
      </FormControl>
      <p>{values.errorMessage.default}</p>
      <LoadingButton
        type="submit"
        loading={values.isLoading}
        variant="outlined"
      >
        Entrar
      </LoadingButton>
    </form>
  );
};

export default AuthComponent;
