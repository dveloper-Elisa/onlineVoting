import { Router } from "express";
import vote from "../voters/vote.js";
import voterLogin from "../voters/voterLogin.js";
import voterRegister from "../voters/voterRegister.js";
import adminRegister from "../admin/adminRegister.js";
import adminLogin from "../admin/adminLogin.js";
import registerCandidate from "../admin/registerCandidate.js";
import getAllCandidates from "../candidate/selectCandidate.js";
import getCandidates from "../candidate/getCandidates.js";
import Candidate from "../models/candidate.js";

const router = new Router();

// voters root
router.post("/voter/register", voterRegister);
router.post("/voter/login", voterLogin);
router.post("/voter/vote", vote);

// admin's root
router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);

// select Candidates
router.post("/candidates", getAllCandidates);
router.get("/candidates", getCandidates);

// highest scored candidates
// API to get the candidate with the highest votes for each post
router.get("/highest-votes", async (req, res) => {
    try {
      const highestVotes = await Candidate.aggregate([
        {
          $group: {
            _id: "$post", // Group by post
            highestVotes: { $max: "$votes" }, // Get maximum votes in each post
            candidate: { $first: "$$ROOT" }, // Select the candidate with highest votes
          },
        },
      ]);
      res.status(200).json(highestVotes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });



//   deleting candidate
router.delete("/candidates/:id", async (req, res) => {
    try {
      const candidate = await Candidate.findByIdAndDelete(req.params.id);
      if (!candidate) {
        return res.status(404).send("Candidate not found");
      }
      res.status(200).send({ message: "Candidate deleted successfully" });
    } catch (error) {
      res.status(500).send({ error: "Error deleting candidate" });
    }
  });

//   Update candidate
router.put("/candidates/:id", async (req, res) => {
    const { name, regNo, post } = req.body;
    try {
      const updatedCandidate = await Candidate.findByIdAndUpdate(
        req.params.id,
        { name, regNo, post },
        { new: true }
      );
      if (!updatedCandidate) {
        return res.status(404).send("Candidate not found");
      }
      res.status(200).send(updatedCandidate);
    } catch (error) {
      res.status(500).send({ error: "Error updating candidate" });
    }
  });

// exporting router
export default router;
