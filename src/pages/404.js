import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
};

const paragraphStyles = {
  marginBottom: 48,
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4,
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <title>Página não entrada!</title>
      <h1 style={headingStyles}>
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        Página não escontrada!
      </h1>
      <p style={paragraphStyles}>
        Desculpe mas a página que você está buscando não existe.
        <br />
        <br />
        <Link to="/">Volte ao início</Link>.
      </p>
    </main>
  );
};

export default NotFoundPage;
