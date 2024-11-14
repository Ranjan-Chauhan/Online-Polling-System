import mongoose, { Schema } from "mongoose";

const voteSchema = new Schema(
  {
    pollId: {
      type: Schema.Types.ObjectId,
      ref: "Poll",
      required: true,
    },

    pollTitle: {
      type: String,
      required: true,
    },

    option: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Vote = mongoose.model("Vote", voteSchema);

/*
// option1: { type: String, required: true },
// option2: { type: String, required: true },
// option2Votes: { type: Number, default: 0 },

// import mongoose, { Schema } from "mongoose";
// // import { Poll } from "./pollModel.js";

// const voteSchema = new Schema(
//   {
//     pollId: {
//       type: Schema.Types.ObjectId,
//       ref: "Poll",
//       required: true,
//     },
//     option1Votes: { type: Number, default: 0 },
//     option2Votes: { type: Number, default: 0 },
//   },
//   {
//     timestamps: true,
//   }
// );

// export const Vote = mongoose.model("Vote", voteSchema);

// const voteSchema = new Schema(
//   {
//     pollTitle: { type: String, required: true },
//     description: { type: String },
//     option1: { type: String, required: true },
//     option2: { type: String, required: true },
//     option1Votes: { type: Number, default: 0 },
//     option2Votes: { type: Number, default: 0 },
//   },
//   { timestamps: true }
// );

// export const Vote = mongoose.model("Vote", voteSchema);

// pollTitle: { type: String, required: true },
// description: { type: String },
// votes: { type: Number, default: 0 },

*/
