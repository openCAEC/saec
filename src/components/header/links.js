export const links = [
  {
    id: "home",
    path: "/",
    name: "Início",
    icon: "home",
  },

  {
    id: "Saecgameday",
    path: "/gameday",
    name: "saecgameday",
    icon: "sports_esports",
  },
  {
    id: "contato",
    path: "/contato",
    name: "Contato",
    icon: "alternate_email",
  },
  {
    id: "entrar",
    path: "/login",
    name: "Entrar",
    icon: "login",
    disableCase: ["isAuth"],
  },
  {
    id: "inscricao",
    path: "/inscricao",
    name: "Inscreva-se",
    icon: "person_add",
    disableCase: ["desktop", "isAuth"],
  },
  {
    id: "app",
    path: "/app",
    name: "SAEC APP",
    icon: "apps",
    disableCase: ["desktop", "isNotAuth"],
  },
  {
    id: "logout",
    path: "/logout",
    name: "Sair",
    icon: "logout",
    disableCase: ["desktop", "isNotAuth"],
  },
];
