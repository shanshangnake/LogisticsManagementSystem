import * as Router from "koa-router";
import { getTagsList } from "../controller";

const router = new Router();

router.get("/tags", getTagsList);

export default router;
