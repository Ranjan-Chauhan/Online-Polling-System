import { Router } from "express";
import { getVotes, saveVote } from "../controllers/voteController.js";

const router = Router();

router.post("/", saveVote);
router.get("/", getVotes);

export default router;
