const express = require("express")
const News = require("../model/news.model")

const newsRouter = express.Router()

newsRouter.get("/", async (req,res) => {
    const news = await News.find()
    res.send(news)
})

newsRouter.post("/add", async (req,res) => {
    const newsData = req.body
    let news = await News(newsData)
    news.save()
    res.send(news)
})


module.exports = newsRouter