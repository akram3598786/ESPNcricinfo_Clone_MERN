import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, require: true },
  email: String,
  password: String,
},{
  versionKey : false,
  timestamps : true
});
const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
