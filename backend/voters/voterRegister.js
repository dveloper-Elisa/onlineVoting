import Voter from "../models/voter.js";
import bcrypt from "bcryptjs";

// voter register
export const voterRegister = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newVoter = new Voter({ name, email, password: hashedPassword });
    await newVoter.save();
    res.status(201).json({ message: "Voter registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default voterRegister;
