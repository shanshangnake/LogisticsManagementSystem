import { statusTagsModel } from "../model";

const getTagsList = async (ctx: any) => {
  const data = await statusTagsModel.find();
  ctx.body = { code: 200, msg: "success?", data };
};

export { getTagsList };
