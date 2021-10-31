const axios = require("axios");

type Response = {
  invite: string;
};
type Error = any;

export default function discord(discordToken, state) {
  return axios({
    method: "get",
    url: `https://saecserver.vercel.app/api/discord`,
    params: {
      discordToken: discordToken,
      state: state,
    },
  });
}
