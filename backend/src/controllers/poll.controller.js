import { Poll } from "../models/pollModel.js";

// Create Poll
export const createPoll = async (req, res) => {
  try {
    const { pollTitle, option1, option2, description } = req.body;

    const newPoll = new Poll({ pollTitle, option1, option2, description });
    const savedPoll = await newPoll.save();

    res.status(201).json({ success: true, data: savedPoll });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all Polls
export const getPolls = async (req, res) => {
  try {
    const polls = await Poll.find();
    res.status(200).json({ success: true, data: polls });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get Poll by ID
export const getPollById = async (req, res) => {
  try {
    const poll = await Poll.findById(req.params.id);
    if (!poll) {
      return res
        .status(404)
        .json({ success: false, message: "Poll not found" });
    }
    res.status(200).json({ success: true, data: poll });
  } catch (error) {
    res
      .status(500)
      .json({
        success: false,
        message: "Error fetching poll",
        error: error.message,
      });
  }
};
