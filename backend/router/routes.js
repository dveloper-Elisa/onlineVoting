import { Router } from "express";
import express from "express";
import vote from "../voters/vote.js";
import voterLogin from "../voters/voterLogin.js";
import voterRegister from "../voters/voterRegister.js";
import adminRegister from "../admin/adminRegister.js";
import adminLogin from "../admin/adminLogin.js";
import registerCandidate from "../admin/registerCandidate.js";
import getAllCandidates from "../candidate/selectCandidate.js";

const router = new Router();

// voters root
router.post("/voter/register", voterRegister);
router.post("/voter/login", voterLogin);
router.post("/voter/vote", vote);

// admin's root
router.post("/admin/register", adminRegister);
router.post("/admin/login", adminLogin);

// select Candidates
router.get("/candidates", getAllCandidates);

// exporting router
export default router;
