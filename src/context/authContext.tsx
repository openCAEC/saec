import React from "react";

const defaultState = {
  dark: false,
  toggleDark: () => {},
};

type Auth = {
  email: string;
} | null;

const ThemeContext = React.createContext(defaultState);

class ThemeProvider extends React.Component {
  state = {
    auth: null,
  };

  toggleDark = () => {
    let dark = !this.state.dark;
    localStorage.setItem("dark", JSON.stringify(dark));
    this.setState({ dark });
  };

  componentDidMount() {
    // Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    if (lsDark) {
      this.setState({ dark: lsDark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }
  }

  render() {
    const { children } = this.props;
    const { dark } = this.state;
    return (
      <ThemeContext.Provider
        value={{
          dark,
          toggleDark: this.toggleDark,
        }}
      >
        {children}
      </ThemeContext.Provider>
    );
  }
}

export default ThemeContext;

export { ThemeProvider };
