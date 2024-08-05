import Admin from "../models/admin.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const adminLogin = async (req, res) => {
  const { username, password } = req.body;

  try {
    const admin = await Admin.findOne({ username });
    if (!admin) {
      return res.status(201).json({ message: "Invalid username or password" });
    }

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) {
      return res.status(201).json({ message: "Invalid username or password" });
    }

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successfull ", admin, token });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default adminLogin;
