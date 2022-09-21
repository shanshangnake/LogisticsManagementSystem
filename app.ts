import * as Koa from "koa";
import * as Router from "koa-router";
import * as mongoose from "mongoose";
import * as dotenv from "dotenv";

import { tagRouter } from "./router";

dotenv.config();

mongoose
  .connect(
    `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@localhost:27017/${process.env.DB_NAME}`
  )
  .then(() => {
    console.log("connect success!");
  });

const app = new Koa();
const router = new Router();

router.get("/", async (ctx: any) => {
  ctx.body = "Hello!";
});

app.use(router.routes());
app.use(tagRouter.routes());

app.listen(9000);
