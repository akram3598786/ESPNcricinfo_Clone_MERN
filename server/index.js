const express = require("express")
const connection = require('./config/db')
const newsRouter = require('./routes/news')
const PORT = 8080
const app = express()
app.use(express.json())
app.use("/news",newsRouter)

app.listen(PORT, async () => {
    await connection
    console.log(`server Listening on port ${PORT}`)
})
