import * as mongoose from "mongoose";

const statusTagsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      require: true,
    },
    name: {
      type: String,
      require: true,
    },
  },
  { versionKey: false }
);

export default mongoose.model("statusTags", statusTagsSchema, "statusTags");
