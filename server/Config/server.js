import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const user_id = process.env.SERVER_ID;
const user_pass = process.env.SERVER_PASS;

let url = `mongodb+srv://${user_id}:${user_pass}@cluster0.zhxb7on.mongodb.net/?retryWrites=true&w=majority`;

async function ConnectDB(req, res){
  
  return new Promise((resolve, reject)=>{
    mongoose.connect(url).
    then(()=>{
        console.log("Connected to Database");
        resolve();
    }).catch((err)=>{
        console.log("Cannot connect to Database");
        reject(err)
    })
  })
}

export default ConnectDB;
