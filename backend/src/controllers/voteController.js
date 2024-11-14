import { Vote } from "../models/voteModel.js";
import { Poll } from "../models/pollModel.js";

export const saveVote = async (req, res) => {
  try {
    const { pollId, pollTitle, option } = req.body;

    const newVote = new Vote({ pollId, pollTitle, option });
    const savedVote = await newVote.save();

    res.status(201).json({ success: true, data: savedVote });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

/*
export const saveVote = async (req, res) => {
  try {
    const { option } = req.body;

    // const vote = req.body;

    const newVote = new Vote({ option });
    const savedVote = await newVote.save();

    res.status(201).json({ success: true, data: savedVote });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
*/

export const getVotes = async (req, res) => {
  try {
    const votes = await Vote.find();
    res.status(200).json({ success: true, data: votes });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Update Poll and associated votes
// export const updatePoll = async (req, res) => {
//   try {
//     const { pollTitle, option1, option2, description } = req.body;

//     // Find and update the poll
//     const poll = await Poll.findByIdAndUpdate(
//       req.params.id,
//       { pollTitle, option1, option2, description },
//       { new: true }
//     );

//     if (!poll) {
//       return res.status(404).json({ message: "Poll not found" });
//     }

//     // Update votes related to this poll if poll options have changed
//     await Vote.updateMany(
//       { pollId: req.params.id },
//       { $set: { pollTitle, option1, option2 } } // Sync vote options with updated poll options
//     );

//     res.status(200).json({
//       message: "Poll and associated votes updated successfully",
//       data: poll,
//     });
//   } catch (error) {
//     res.status(500).json({ message: "Error updating poll", error });
//   }
// };

// // Delete Poll and associated votes
// export const deletePoll = async (req, res) => {
//   try {
//     const poll = await Poll.findByIdAndDelete(req.params.id);

//     if (!poll) {
//       return res.status(404).json({ message: "Poll not found" });
//     }

//     // Delete all votes associated with the poll
//     await Vote.deleteMany({ pollId: req.params.id });

//     res
//       .status(200)
//       .json({ message: "Poll and associated votes deleted successfully" });
//   } catch (error) {
//     res.status(500).json({ message: "Error deleting poll", error });
//   }
// };

// export { createPoll, getPollById, getPolls, updatePoll, deletePoll };
