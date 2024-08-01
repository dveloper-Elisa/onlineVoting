import Voter from "../models/voter.js";
import Candidate from "../models/candidate.js";

// Voting
const vote = async (req, res) => {
  const { voterId, candidateId } = req.body;

  try {
    const voter = await Voter.findById(voterId);
    if (!voter || voter.hasVoted) {
      return res
        .status(400)
        .json({ error: "Voter has already voted or does not exist" });
    }

    const candidate = await Candidate.findById(candidateId);
    if (!candidate) {
      return res.status(400).json({ error: "Candidate does not exist" });
    }

    candidate.votes += 1;
    voter.hasVoted = true;

    await candidate.save();
    await voter.save();

    res.json({ message: "Vote cast successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export default vote;
