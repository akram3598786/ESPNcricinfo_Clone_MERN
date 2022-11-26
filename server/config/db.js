// const mongoose = require("mongoose");
// import mongoose from "mongoose";
// const connection = mongoose.connect("mongodb://localhost:27017/cricinfo_news");
// console.log("mongoose connect");
// export default connection;
import express from "express";
import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config();
const user_id = process.env.SERVER_ID;
const user_pass = process.env.SERVER_PASS;
const connection = mongoose.connect(
  `mongodb+srv://${user_id}:${user_pass}@cluster0.zhxb7on.mongodb.net/?retryWrites=true&w=majority`
);
// const connection = mongoose.connect(
//   `mongodb+srv://${user_id}:${user_pass}@cluster0.zhxb7on.mongodb.net/?retryWrites=true&w=majority`
// );
//const connection = mongoose.connect("mongodb://127.0.0.1:27017/Cricinfo");
// const connection = mongoose.connect("mongodb://127.0.0.1:27017/Cricinfo");
export default connection;
