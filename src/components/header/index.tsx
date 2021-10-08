import { Link } from "gatsby";
import * as React from "react";
import Drawer from "@material-ui/core/Drawer";

import * as styles from "./header.module.scss";
import { links } from "./links";

const HeaderComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  function getLinks() {
    return links.map((link) => {
      if (!link.disableCase || !link.disableCase.includes("desktop")) {
        return (
          <Link
            key={link.id}
            to={link.path}
            className={
              link.className
                ? `${styles.link} ${styles[link.className]}`
                : styles.link
            }
          >
            {link.name}
          </Link>
        );
      }
    });
  }

  return (
    <header className={styles.header}>
      <button onClick={() => toggleDrawer()}>drawer</button>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        {getLinks()}
      </Drawer>

      <nav>{getLinks()}</nav>
    </header>
  );
};

export default HeaderComponent;
