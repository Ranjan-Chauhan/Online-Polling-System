import { Router } from "express";
import {
  createPoll,
  getPollById,
  getPolls,
} from "../controllers/poll.controller.js";

const router = Router();

router.post("/", createPoll);
router.get("/", getPolls);
router.get("/:id", getPollById);
// router.put("/:id", updatePoll);
// router.delete("/:id", deletePoll);

export default router;
