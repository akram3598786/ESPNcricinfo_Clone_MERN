// const express = require("express");
import express from "express";
// import connection from "./database/server.js";
import user_router from "./Connectors/userRouter.js";
// const connection = require('./config/db')
import connection from "./config/db.js";
// const newsRouter = require('./routes/news.js')
import newsRouter from "./routes/news.js";
// const cors = require('cors');
import cors from "cors";
import authfunc from "./middleware/auth.js";
const PORT = 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use(authfunc);
app.use("/user", user_router);

app.use("/news", newsRouter);

app.listen(PORT, async () => {
  await connection;
  console.log(`server Listening on port ${PORT}`);
});
