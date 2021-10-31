const axios = require("axios");

export default function verifyTicket(ticket: string) {
  return axios({
    method: "get",
    url: `https://saecserver.vercel.app/api/verifyTicket`,
    headers: {
      "Access-Control-Allow-Origin": ["https://saecserver.vercel.app"],
      "Content-Type": "application/json",
      Accept: "*/*",
      "Access-Control-Request-Method": "GET",
      "Access-Control-Request-Headers": "Content-Type",
      "Access-Control-Allow-Credentials": "true",
    },
    params: {
      ticket: ticket,
    },
  });
}
