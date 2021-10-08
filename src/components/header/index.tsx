import { Link } from "gatsby";
import * as React from "react";

import * as styles from "./header.module.scss";
import { links } from "./links";

const HeaderComponent = () => {
  return (
    <header className={styles.header}>
      <nav>
        {links.map((link) => {
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
        })}
        ;
      </nav>
    </header>
  );
};

export default HeaderComponent;
