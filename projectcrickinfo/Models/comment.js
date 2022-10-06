import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    content: String,
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const blogModel = mongoose.model("feeds", blogSchema);
export default blogModel;
