import { verify } from "../util/jwt.js";

const authfunc = async (req, res, next) => {
  const authtoken = req.headers.authorization;

  if (authtoken) {
    const user = authtoken.split(" ")[1];
    try {
      const verifiedToken = verify(user);
      req.user = verifiedToken;
     // console.log(verifiedToken);
      next();
    } catch (error) {
      res.status(400).send({message : "error happen : Not authourized", err});
    }
  } else {
    next();
  }
};
export default authfunc;
