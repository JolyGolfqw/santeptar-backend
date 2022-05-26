const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Нет доступа" });
  }

  const [type, token] = authorization.split(" ");

  if (type !== "Bearer") {
    return res.status(401).json("Неправильный тип токена");
  }

  try {
    req.user = await jwt.verify(token, process.env.SECRET);
    next();
  } catch (err) {
    res.status(401).json({ error: "Неверный токен" });
  }
};
