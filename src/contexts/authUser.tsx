import React from "react";
import { firebaseApp } from "../services/initFirebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const defaultState = {
  authUser: null,
};

const AuthUserLogStyles = [
  `background: rebeccapurple`,
  `border-radius: 0.5em`,
  `color: white`,
  `font-weight: bold`,
  `padding: 2px 0.5em`,
].join(`;`);

const AuthUserContext = React.createContext(defaultState);

class AuthUserProvider extends React.Component {
  state = {
    authUser: null,
  };

  componentDidMount() {
    const auth = getAuth(firebaseApp);
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
