import express from "express";
import UserModel from "../Models/User.js";
import { sign } from "../util/jwt.js";
const user_router = express.Router();

user_router.get("/", async (req, res) => {
  try {
    const user = await UserModel.find();
    res.send({ user });
  } catch (error) {
    res.status(400).send("Internal Error");
  }
});
user_router.post("/", async (req, res) => {
  const body = req.body;
  const { name, email, password } = body;
  if (!name || !email || !password) {
    res.status(401).send({ error: "Please Fill the entire Information" });
  } else {
    const user = await UserModel.create(body);
    res.send({ user });
  }
});
user_router.post("/login", async (req, res) => {
  try {
    const body = req.body;
  //  console.log("hy");
  //  console.log(body.email);
    const user = await UserModel.findOne({ email: body.email });
   // console.log(user.email, user.password);

    if (user.password !== body.password) {
   //   console.log("yes");
      req.send({
        message: "Invalid email address",
      });
    } else {
      const token = sign(user.toJSON());
   //   console.log("hy");
      res.send({
        message: "Login Successful",
        token,
      });
    }
  } catch (error) {
    res.status(400).send("Invalid Login");
  }
});

user_router.get("/loginuser", async (req, res) => {
  try {
    if (req.user) {
      res.send(req.user);
    } else {
      req.send("Login once");
    }
  } catch (error) {
    res.status.send("Token is no there");
  }
});

export default user_router;
// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzNhYzA4ZmYyNjY1Y2NhMmVkMGQzODQiLCJuYW1lIjoiVGFudSIsImVtYWlsIjoiZ2hhbnUxMjNAZ21haWwuY29ubSIsInBhc3N3b3JkIjoidGFudW1hbmdhbCIsImFkZHJlc3MiOiJCaHV0ZXN3YXIiLCJibG9nX2lkIjpbXSwiX192IjowLCJpYXQiOjE2NjQ3OTU0MzB9.HspRnwz968EjM6bZYpWEVh4mTfjsRK3nOORNg4spfBA";
