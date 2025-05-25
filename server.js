require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    app.listen(process.env.PORT || 4000);
  } catch (error) {
    process.exit(1);
  }
};

const queryRoutes = require("./routes/queryRoutes");
const likesRoute = require("./routes/likesRoute");
connectDb();
app.use(express.json());

const cors = require("cors");

app.use(cors()); // Add this before routes

// middlewares
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use("/api/querys", queryRoutes);
app.use("/api/like", likesRoute);
