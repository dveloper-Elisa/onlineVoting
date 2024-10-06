import Candidate from "../models/candidate.js";

const registerCandidate = async (req, res) => {
  const { name, regNo, post } = req.body;
  const file = req.file;
  try {
    const newCandidate = new Candidate({
      name,
      regNo: regNo.toLowerCase(),
      post,
      filePath: file.path,
    });

    const isRegistered = await Candidate.findOne({
      regNo: regNo.toLowerCase(),
    });

    if (isRegistered) {
      return res.status(200).json({ message: "Candidate Exist" });
    }
    await newCandidate.save();
    return res
      .status(201)
      .json({ message: "Candidate registered successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default registerCandidate;
