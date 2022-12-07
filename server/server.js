const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { handleError } = require("./utils/errorSetting");
const app = express();

// CONNECT TO DATABASE
const connectDB = require("./config/config");
// /* CONFIGURATIONS */


/* ROUTES */
app.use("/api/test", (req, res) => {
    res.status(200).json("The server is up and running");
});


/* CATCH ERROR */
app.use(handleError);

/* DISCONNECTED MASSAGE FROM THE DATABASE */
mongoose.connection.on("disconnected", () => {
  console.log("mongo DB disconnected");
});


/* CREATE A LISTEN PORT AND SETON THE SERVER */
const PORT = process.env.PORT || 6001;
app.listen(PORT, () => {
  connectDB();
  console.log(`app listen http://localhost:${PORT}`);
});