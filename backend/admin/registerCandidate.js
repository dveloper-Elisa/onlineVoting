import Candidate from "../models/candidate.js";

const registerCandidate = async (req, res) => {
  const { name, regNo, post } = req.body;

  try {
    const newCandidate = new Candidate({ name, regNo, post });

    const isRegistered = await Candidate.findOne({ regNo });

    if (isRegistered) {
      return res.status(309).json({ message: "Candidate already registered" });
    }
    await newCandidate.save();
    res.status(201).json({ message: "Candidate registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default registerCandidate;
