/*IMPORT DEPENDENCE*/
const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const { handleError } = require("./utils/errorSetting");
const passport = require("passport");
const bodyParser = require("body-parser");
const app = express();
const cookieSession = require("cookie-session");
const helmet = require("helmet");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const CombiningAllRoutes = require("./routes");
/*CONNECT TO PASSPORTS STRATEGY FUNCTIONS*/
const passportStrategy = require("./config/passport");
/*CONNECT TO MONGODB ATLAS DATABASE FUNCTIONS*/
const connectDB = require("./config/configDB");
/* CONFIGURATIONS */
// app.use(cors());
app.use(helmet());
app.use(bodyParser.json({ limit: "50mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
app.use(
  cookieSession({
    name: "marketplace",
    keys: ["key1", "key2"],
  })
);
console.log
app.use(cookieParser());
app.use(passport.initialize());
app.use(passport.session());
/* ROUTES */
app.use(CombiningAllRoutes);

/* HANDEL ALL ERROR BEFORE SENDING THEM TO THE CLIENT*/
app.use(handleError);

/* DISCONNECTED CONFIGURATIONS FROM THE DATABASE */
mongoose.connection.on("disconnected", () => {
  console.log("mongo DB disconnected");
});

/* SET SERVER PORT */
const PORT = process.env.PORT || 6001;

/* SETON THE SERVER */
app.listen(PORT, () => {
  /* CONNECT TO DB */
  connectDB();
  /* INITIALIZE PASSPORT TO SERVER*/
  passportStrategy(passport);
  console.log(`app listen http://localhost:${PORT}`);
});
