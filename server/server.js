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
    maxAge: 12 * 60 * 60 * 1000, // 24 hours
  })
);
console.log;
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

/*CONNECT TO MONGODB ATLAS DATABASE FUNCTIONS*/
const connectDB = () => {
  try {
    mongoose.set("strictQuery", true);
    mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log("The DB login was successful");

    // Start the server only if the connection to the database is successful
    const PORT = process.env.PORT || 6001;
    app.listen(PORT, () => {
      console.log(`app listen http://localhost:${PORT}`);
    });
  } catch (error) {
    throw error;
  }
};
connectDB();
