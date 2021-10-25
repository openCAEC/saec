import React from "react";
import { auth } from "../services/initFirebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthUserLogStyles = [
  `background: rebeccapurple`,
  `border-radius: 0.5em`,
  `color: white`,
  `font-weight: bold`,
  `padding: 2px 0.5em`,
].join(`;`);

const defaultState = {
  authUser: null,
};

const AuthUserContext = React.createContext(defaultState);
class AuthUserProvider extends React.Component {
  state = {
    authUser: null,
  };

  componentDidMount() {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ authUser: user });
        console.log(user.uid);

        console.debug(`%cUser`, AuthUserLogStyles, user);
      } else {
        this.setState({ authUser: null });
        console.debug(`%cUser`, AuthUserLogStyles, "Não logado!");
      }
    });
  }
  render() {
    const { children } = this.props;
    const { authUser } = this.state;
    return (
      <AuthUserContext.Provider
        value={{
          authUser,
        }}
      >
        {children}
      </AuthUserContext.Provider>
    );
  }
}
export default AuthUserContext;
export { AuthUserProvider };
