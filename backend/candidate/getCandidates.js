import Candidate from "../models/candidate.js";

const getAllCandidates = async (req, res) => {
  try {
    const { post } = req.body;
    const candidates = await Candidate.find();
    // if (candidates.length === 0) {
    //   res.send
    // }

    return res.status(201).json({ message: "Success", candidates });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default getAllCandidates;
