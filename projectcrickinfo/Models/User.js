import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  address: String,
  blog_id: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "feeds",
    },
  ],
});
const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
