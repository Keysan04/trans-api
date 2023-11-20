import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  item: {
    type: String,
    required: true,
    unique: true,
    index: 1,
  },
  amount: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Transaction", transactionSchema); //users
