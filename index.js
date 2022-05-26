require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(express.json());
app.use("/images", express.static(path.resolve(__dirname, "images")));
app.use(cors());

mongoose
  .connect(process.env.SERVER)
  .then(() => console.log("Подключение прошло успешно"))
  .catch(() => console.log("Что-то пошло не так"));

app.use(require("./routes"));

app.listen(process.env.PORT, () => {
  console.log("Сервер запушен");
});
