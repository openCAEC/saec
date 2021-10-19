import { Link } from "gatsby";
import * as React from "react";
import Drawer from "@material-ui/core/Drawer";

import * as styles from "./header.module.scss";
import { links } from "./links";
import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
} from "@material-ui/core";

const HeaderComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <header className={styles.header}>
      <button onClick={() => toggleDrawer()}>drawer</button>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        <List>
          {links.map((link) => {
            if (!link.disableCase || !link.disableCase.includes("desktop")) {
              return (
                <Link key={link.id} to={link.path}>
                  <ListItem button>
                    <ListItemIcon>{<Icon>{link.icon}</Icon>}</ListItemIcon>
                    <ListItemText primary={link.name} />
                  </ListItem>
                </Link>
              );
            }
          })}
        </List>
      </Drawer>

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
      </nav>
    </header>
  );
};

export default HeaderComponent;
