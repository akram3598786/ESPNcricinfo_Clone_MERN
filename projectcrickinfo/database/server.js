// import express from "express";
import mongoose from "mongoose";
const connection = mongoose.connect("mongodb://127.0.0.1:27017/Cric");
export default connection;
