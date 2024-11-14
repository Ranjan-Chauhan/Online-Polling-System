import mongoose, { Schema } from "mongoose";

const pollSchema = new Schema(
  {
    pollTitle: {
      type: String,
      required: [true, "plltitle is Required"],
      trim: true,
      index: true,
    },
    description: {
      type: String,
      trim: true,
    },
    option1: {
      type: String,
      required: [true, "option1 is Required"],
      lowercase: true,
      trim: true,
      index: true,
    },
    option2: {
      type: String,
      required: [true, "option2 is Required"],
      lowercase: true,
      trim: true,
      index: true,
    },
  },
  {
    timestamps: true,
  }
);

export const Poll = mongoose.model("Poll", pollSchema);
