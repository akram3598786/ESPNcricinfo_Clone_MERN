const mongoose = require("mongoose")

const connection = mongoose.connect('mongodb://localhost:27017/cricinfo_news')
console.log("mongoose connect")
module.exports = connection
