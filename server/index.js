const express = require("express")
const connection = require('./config/db')
const newsRouter = require('./routes/news')
const cors = require('cors');
const PORT = 8080
const app = express()
app.use(express.json())
app.use(cors());
app.use("/news",newsRouter)

app.listen(process.env.PORT || PORT, async () => {
    await connection
    console.log(`server Listening on port ${PORT}`)
})
