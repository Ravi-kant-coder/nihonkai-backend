const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
  totalCount: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("like", likeSchema);
