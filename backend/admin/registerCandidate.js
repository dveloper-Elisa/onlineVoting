import Candidate from "../models/candidate.js";

const registerCandidate = async (req, res) => {
  const { name, post } = req.body;

  try {
    const newCandidate = new Candidate({ name, post });
    await newCandidate.save();
    res.status(201).json({ message: "Candidate registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default registerCandidate;
