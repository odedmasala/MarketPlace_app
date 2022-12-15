const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");

const register = async (req, res, next) => {
  // if(!req.body) next(Error("need password and username"))
  try {
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
      source: "email",
    });
    await newUser.save();
    res.status(201).json("user created");
  } catch (err) {
    next(err);
  }
};
const redirectLogin = (req, res) => req.redirect("http://localhost:3000/login");
const loginSuccess = (req, res) => {
  console.log(req.user);
  if (req.user) {
    res.status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: req.user,
    });
  } else {
    console.log("not access");
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};
const loginSuccessUser = (req, res) => {
  const { user } = req.session.passport;
  if (user) {
    res.status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: req.user,
    });
  } else {
    console.log("not access");
    res.status(403).json({ error: true, message: "Not Authorized" });
  }
};

const loginFailed = (req, res) => {
  res.status(401).json({
    error: true,
    message: "Log in failure",
  });
};

// const login = (req, res) => res.redirect("/login/success");

const logout = (req, res) => {
  req.logout();
  res.redirect("http://localhost:3000");
};
const checkRegularUser = passport.authenticate("local", {
  failureRedirect: "/login/failed",
});
const goToGoogle = passport.authenticate("google", ["profile", "email"]);

const googleCalBack = passport.authenticate("google", {
  successRedirect: "http://localhost:3000",
  failureRedirect: "/login/failed",
});

const goToFacebook = passport.authenticate("facebook", ["profile", "email"]);

const facebookCalBack = passport.authenticate("facebook", {
  successRedirect: "http://localhost:3000",
  failureRedirect: "/login/failed",
});

module.exports = {
  loginFailed,
  loginSuccess,
  logout,
  register,
  loginSuccessUser,
  redirectLogin,
  // login,
  checkRegularUser,
  goToGoogle,
  googleCalBack,
  goToFacebook,
  facebookCalBack,
};
