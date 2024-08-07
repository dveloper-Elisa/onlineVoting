import Candidate from "../models/candidate.js";

const getAllCandidates = async (req, res) => {
  try {
    const candidates = await Candidate.find();
    if (candidates.length === 0) {
      return res.status(200).json({ message: "No candidates found" });
    }

    return res.status(201).json({ message: "Success", candidates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllCandidates;
