// const mongoose = require("mongoose");
import mongoose from "mongoose";
const connection = mongoose.connect("mongodb://localhost:27017/cricinfo_news");
console.log("mongoose connect");
export default connection;
