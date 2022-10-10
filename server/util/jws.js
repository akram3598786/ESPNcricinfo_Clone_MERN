import jwt from "jsonwebtoken";

export const sign = (payload) => {
  const secret = "manumangalthegreat123450";
  const token = jwt.sign(payload, secret);
  return token;
};

export const decode = (token) => {
  return jwt.decode(token);
};

export const verify = (payload) => {
  try {
    const secret = "manumangalthegreat123450";
    const user = jwt.verify(payload, secret);
    return user;
  } catch (error) {
    throw new Error("Not found");
  }
};
