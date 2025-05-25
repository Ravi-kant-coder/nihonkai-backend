const express = require("express");
const router = express.Router();
const LikeModel = require("../models/likeModel.js");
// const mongoose = require("mongoose");

//To Post a Like
const addLike = async (req, res) => {
  try {
    let doc = await LikeModel.findOne();
    if (!doc) doc = new LikeModel({ totalCount: 0 });

    doc.totalCount += 1;
    await doc.save();
    res.status(200).json({ message: "Updated", totalCount: doc.totalCount });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
router.post("/", addLike);

//To fetch a Like on UI
router.get("/", async (req, res) => {
  try {
    const doc = await LikeModel.findOne();
    res.status(200).json({ totalCount: doc ? doc.totalCount : 0 });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
