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
    name: "saecthon",
    icon: "home",
  },

  {
    id: "saecgameday",
    path: "/saecgameday",
    name: "saecgameday",
    icon: "sports_esports",
  },
  {
    id: "signin",
    path: "/signin",
    name: "Entrar",
    icon: "login",
  },
  {
    id: "signup",
    path: "/signup",
    name: "Inscreva-se",
    icon: "person_add",
    className: "signupButton",
  },
  {
    id: "contato",
    path: "/contato",
    name: "Contato",
    icon: "alternate_email",
    disableCase: ["desktop"],
  },
];
