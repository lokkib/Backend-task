const express = require("express");
const mongoose = require("mongoose");
const app = express();

const userRouter = require("./routes/users");
const { PORT = 3005, API_URL = "http://127.0.0.1" } = process.env;

const helloWorld = (request, response) => {
  response.status(200);
  response.send("Hello, world!");
};

app.use(express.json());

app.use(userRouter);
const url = "mongodb://127.0.0.1:27017/BackendHomework";

mongoose.connect(url, {
  useNewUrlParser: true,
});

app.get("/", helloWorld);

app.listen(PORT, () => {
  console.log(`Сервер запущен по адресу ${API_URL}:${PORT}`);
});
