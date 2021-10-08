type Link = {
  id: string;
  path: string;
  name: string;
  disableCase?: Array<string>;
  className?: string;
};

export const links: Array<Link> = [
  {
    id: "home",
    path: "/",
    name: "saecthon",
  },
  {
    id: "saecthon",
    path: "/saecthon",
    name: "saecthon",
  },

  {
    id: "saecgameday",
    path: "/saecgameday",
    name: "saecgameday",
  },
  {
    id: "signin",
    path: "/signin",
    name: "Entrar",
  },
  {
    id: "signup",
    path: "/signup",
    name: "Inscreva-se",
    className: "signupButton",
  },
  {
    id: "contato",
    path: "/contato",
    name: "Contato",
    disableCase: ["desktop"],
  },
];
