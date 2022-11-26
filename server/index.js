import express from "express";
import ConnectDB from "./Config/server.js";
import user_router from "./routes/userRouter.js";
import newsRouter from "./routes/news.js";
import cors from "cors";
import authfunc from "./middleware/auth.js";

const PORT = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.use(cors());
app.use(authfunc);

app.use("/user", user_router);
app.use("/news", newsRouter);

app.listen(PORT, async () => {
    await ConnectDB();
    console.log(`server Listening on port ${PORT}`);
});
