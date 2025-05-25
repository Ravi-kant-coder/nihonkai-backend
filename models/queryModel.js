const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const querySchema = new Schema(
  {
    studentName: { type: String, required: true },
    mobile: { type: Number, required: true },
    queryText: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Query", querySchema);
