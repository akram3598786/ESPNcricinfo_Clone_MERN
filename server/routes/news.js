// const express = require("express")
import express from "express";
// const News = require("../model/news.model")
// import News from "../model/news.model";
import News from "../Models/news.model.js";

const newsRouter = express.Router();

newsRouter.get("/", async (req, res) => {
  const news = await News.find();
  res.send(news);
});

newsRouter.post("/add", async (req, res) => {
  const newsData = req.body;
  let news = await News(newsData);
  news.save();
  res.send(news);
});

export default newsRouter;
