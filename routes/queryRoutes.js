const express = require("express");
const router = express.Router();

const {
  createQuery,
  getQuerys,
  deleteQuery,
} = require("../controllers/queryControllers");

//To get all Queries
router.get("/", getQuerys);

//To Post a single Query
router.post("/", createQuery);

//To Delete a single Query
router.delete("/:id", deleteQuery);

module.exports = router;
