import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router/routes.js";
dotenv.config();

const app = express();
app.use(router);

const PORT = process.env.PORT || 3002;

app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/voting-app")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on ${PORT} .....`));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
