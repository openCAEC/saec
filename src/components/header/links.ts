type Link = {
  id: string;
  path: string;
  name: string;
  icon: string;
  disableCase?: Array<string>;
  className?: string;
};

export const links: Array<Link> = [
  {
    id: "home",
    path: "/",
    name: "Início",
    icon: "home",
  },

  {
    id: "saecgameday",
    path: "/gameday",
    name: "saecgameday",
    icon: "sports_esports",
  },
  {
    id: "entrar",
    path: "/entrar",
    name: "Entrar",
    icon: "login",
  },
  {
    id: "inscricao",
    path: "/inscricao",
    name: "Inscreva-se",
    icon: "person_add",
    disableCase: ["desktop"],
  },
  {
    id: "contato",
    path: "/contato",
    name: "Contato",
    icon: "alternate_email",
    disableCase: ["desktop"],
  },
];
