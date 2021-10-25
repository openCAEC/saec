import { Link } from "gatsby";
import * as React from "react";
import Drawer from "@mui/material/Drawer";
// @ts-ignore
// Ignorar erro de importação de módulo scss pelo ts
import * as styles from "./header.module.scss";

import { links } from "./links";

import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
import {
  Icon,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";

const HeaderComponent = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [scrollPosition, setScrollPosition] = React.useState(0);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);

    console.log("Position: ", position, " State: ", scrollPosition);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const SignupButton = styled(Button)<ButtonProps>(({ theme }) => ({
    color: "white",
    textDecoration: "none",
    margin: "0 1.4rem",
    background:
      "radial-gradient(187.5% 187.5% at 50.29% -54.17%, #ED3148 0%, #FBF600 100%)",
    "&:hover": {
      background:
        "radial-gradient(187.5% 187.5% at 50.29% -54.17%, #ED3148 10%, #FBF600 100%)",
    },
  }));

  return (
    <header
      className={`${styles.header} ${scrollPosition > 0 ? styles.shadow : ""}`}
    >
      <div className={styles.mobileButton}>
        <IconButton
          onClick={() => toggleDrawer()}
          aria-label="menu"
          sx={{ color: "white" }}
        >
          <Icon>menu</Icon>
        </IconButton>
      </div>

      <Drawer
        anchor={"left"}
        open={isDrawerOpen}
        onClose={() => toggleDrawer()}
      >
        <nav className={styles.mobile}>
          <div className={styles.logoContainer}>
            <img src="/logo_default.svg" alt="Logo SAEC" />
          </div>

          <List>
            {links.map((link) => {
              if (!link.disableCase || !link.disableCase.includes("mobile")) {
                return (
                  <ListItem
                    button
                    key={link.id}
                    component={Link}
                    to={link.path}
                  >
                    <ListItemIcon>{<Icon>{link.icon}</Icon>}</ListItemIcon>
                    <ListItemText
                      className={styles.textDrawerLink}
                      primary={link.name}
                    />
                  </ListItem>
                );
              }
            })}
          </List>
        </nav>
      </Drawer>

      <nav className={styles.desktop}>
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
        <Link to="/inscricao" style={{ textDecoration: "none" }}>
          <SignupButton>Inscreva-se</SignupButton>
        </Link>
      </nav>
    </header>
  );
};

export default HeaderComponent;
