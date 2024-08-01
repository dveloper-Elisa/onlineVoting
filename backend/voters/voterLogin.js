import Voter from "../models/voter.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

// Voter Login
const voterLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const voter = await Voter.findOne({ email });
    if (!voter) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const isMatch = await bcrypt.compare(password, voter.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid email or password" });
    }

    const token = jwt.sign({ id: voter._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ voter, token });
  } catch (error) {
    res.status(500).json({ error: error });
  }
};

export default voterLogin;
