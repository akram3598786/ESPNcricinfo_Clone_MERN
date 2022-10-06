const mongoose = require("mongoose")

const connection = mongoose.connect('mongodb://localhost:27017/cric_news')
console.log("mongoose connect")
module.exports = connection
