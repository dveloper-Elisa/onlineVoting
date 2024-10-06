import Voter from "../models/voter.js";
import bcrypt from "bcryptjs";

// voter register
const voterRegister = async (req, res) => {
  const { name, email, regNo, password } = req.body;
  try {
    const findVoter = await Voter.findOne({ $or: [{ email }, { regNo }] });
    if (findVoter) {
      return res.status(200).json({ message: "Voter Exit" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newVoter = new Voter({
      name,
      email,
      regNo,
      password: hashedPassword,
    });
    await newVoter.save();
    res.status(201).json({ message: "Voter registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default voterRegister;
