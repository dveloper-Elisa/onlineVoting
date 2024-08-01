import Router from "express";

import vote from "../voters/vote.js";
import voterLogin from "../voters/voterLogin.js";
import voterRegister from "../voters/voterRegister.js";

const router = Router();

router.post("/voter/register", voterRegister);
router.post("/voter/login", voterLogin);
router.post("/voter/vote", vote);

// router.post("/voter/login", login);

export default router;
