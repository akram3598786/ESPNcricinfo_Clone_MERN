import express from "express";
import mongoose from "mongoose";
import connection from "./database/server.js";
import user_router from "./Connectors/userRouter.js";
import blog_router from "./Connectors/blogRouter.js";

import authfunc from "./middleware/auth.js";
const app = express();
app.use(express.json());
app.use(authfunc);
app.use("/user", user_router);
app.use("/blog", blog_router);

const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, async () => {
  try {
    await connection;
    console.log("Server Started");
  } catch (error) {
    console.log(error);
  }
});
