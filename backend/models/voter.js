import mongoose from "mongoose";

const voterSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  regNo: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  votes: { type: Map, of: Boolean, default: {} },
});

const Voter = mongoose.model("Voter", voterSchema);

export default Voter;
