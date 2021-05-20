// Configuration for our server

import sirv from "sirv";
import compression from "compression";
import polka from "polka";
import * as sapper from "@sapper/server";

const { NODE_ENV } = process.env;
const dev = NODE_ENV === "development";

polka()
  .use(compression({ threshold: 0 }), sirv("static", { dev }), sapper.middleware())
  .listen(PORT, (error) => {
    if (error) console.log("Error", error);
  });
