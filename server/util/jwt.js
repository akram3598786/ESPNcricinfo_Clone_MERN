import jwt from "jsonwebtoken";

export const sign = (payload) => {
  const secret = "akramali0359878603598786@45556&^^&9";
  const token = jwt.sign(payload, secret);
  return token;
};

export const decode = (token) => {
  return jwt.decode(token);
};

export const verify = (payload) => {
  try {
    const secret = "akramali0359878603598786@45556&^^&9";
    const user = jwt.verify(payload, secret);
    return user;
  } catch (error) {
    throw new Error("Not found");
  }
};
