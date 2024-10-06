import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import router from "./router/routes.js";
import registerCandidate from "./admin/registerCandidate.js";

import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";

import cors from "cors";
dotenv.config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage: storage });
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

app.use(express.json());
app.use(router);
app.post("/admin/candidate", upload.single("file"), registerCandidate);

/**
 * conneciton to mongoose
 */
mongoose
  .connect("mongodb://127.0.0.1:27017/voting-app")
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => console.log(`Server running on ${PORT} .....`));
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
