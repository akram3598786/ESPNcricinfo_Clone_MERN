const mongoose  = require("mongoose")

const newsSchema = new mongoose.Schema({
    title: String,
    keywords: [String],
    link: String,
    creator: [String],
    video_url: String,
    description: String,
    content: String,
    pubDate: String,
    image_url: String,
    source_id: String,
    country: [String],
    category: [String],
    language: String
})

module.exports = mongoose.model("News",newsSchema)