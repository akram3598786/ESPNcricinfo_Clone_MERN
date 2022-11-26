import { verify } from "../util/jws.js";

const authfunc = async (req, res, next) => {
  const authtoken = req.headers.authorization;
  console.log(authtoken);
  if (authtoken) {
    const user = authtoken.split(" ")[1];

    try {
      const verifiedToken = verify(user);
      req.user = verifiedToken;
      console.log(verifiedToken);
      next();
    } catch (error) {
      res.status(400).send("error happen");
    }
  } else {
    next();
  }
};
export default authfunc;
