const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { handleError } = require("./utils/errorSetting");
const bodyParser = require("body-parser");
const app = express();
const helmet = require("helmet")
const cors = require("cors")
const departmentRoute = require("./routes/department/department")
const productRoute = require("./routes/product/product")
// const receiptRoute = require("./routes/receipt/receipt")
// const sectionRoute = require("./routes/section/section")
const storeRoute = require("./routes/store/store")
// const storeManagerRoute = require("./routes/storeManager/storeManager")
// const userRoute = require("./routes/user/user")

// CONNECT TO DATABASE
const connectDB = require("./config/config");

// /* CONFIGURATIONS */
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* ROUTES */
app.use("/api/test", (req, res) => res.status(200).json("The server is up and running"));
app.use("/api/department",departmentRoute)
app.use("/api/products",productRoute)
// app.use("api/receipt",receiptRoute)
// app.use("api/section",sectionRoute)
app.use("/api/store",storeRoute)
// app.use("api/storeManager",storeManagerRoute)
// app.use("api/user",userRoute)


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
