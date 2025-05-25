const mongoose = require("mongoose");
const Query = require("../models/queryModel");

//get all Queries
const getQuerys = async (req, res) => {
  const allQuerys = await Query.find({}).sort({ createdAt: -1 });
  res.status(200).json(allQuerys);
};

//Post a query
const createQuery = async (req, res) => {
  const { studentName, mobile, queryText } = req.body;
  try {
    const query = await Query.create({ studentName, mobile, queryText });
    res.status(200).json(query);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//Delete a single Query
const deleteQuery = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "Not a valid ID format" });
  }
  const query = await Query.findOneAndDelete({ _id: id });

  if (!query) {
    return res.status(400).json({
      error: "ID format is valid but ID is not matching or some other error",
    });
  }
  res.status(200).json(query);
};
module.exports = {
  createQuery,
  getQuerys,
  deleteQuery,
};
