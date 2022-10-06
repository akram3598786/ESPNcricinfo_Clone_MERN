import express from "express";
import blogModel from "../Models/blog.js";
import UserModel from "../Models/User.js";
const blog_router = express.Router();

blog_router.get("/", async (req, res) => {
  try {
    const blogs = await blogModel.find();
    res.send(blogs);
  } catch (error) {
    res.status(400).send("Internal Error");
  }
});
blog_router.post("/create/:id/:blodid", async (req, res) => {
  const body = req.body;
  const { id, blodid } = req.params;
  console.log(blodid);
  const user = await UserModel.findById(id);
  body.user_id = id;
  console.log(body, user);
  const blog = await blogModel.create(body);
  console.log(user.name);
  user.blog_id = [...user.blog_id, blog._id];

  await user.save();

  return res.send(blog);
});

export default blog_router;
