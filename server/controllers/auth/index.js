const passport = require("passport");
const bcrypt = require("bcrypt");
const { createOneUser } = require("../user/DAL");
const { createError } = require("../../utils/errorSetting");
const User = require("../../models/user/UserSchema");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  if (!req.body) next(createError(403, "need user form"));
  if (!req.body.user) next(createError(403, "need user form"));
  try {
    const { email, firstName, lastName, phone, password } = req.body.user;
    const isUser = await User.findOne({ email: email });
    if (isUser) return next(createError(406, "User already exists"));
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(password, salt);
    const createdMassage = createOneUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: hash,
      registerType: "email",
    });
    return res.status(201).json({ create: true });
  } catch (err) {
    next(err);
  }
};

const redirectLogin = (req, res) => req.redirect("http://localhost:3000/login");

const loginSuccess = (req, res) => {
  const { user } = req;
  if (user) {
    req.user = user;
    const hashToken = { id: user._id };
    if (user.meager) hashToken.meager = user.meager;
    if (user.isAdmin) hashToken.isAdmin = user.isAdmin;
    const token = jwt.sign(hashToken, process.env.JWT);
    const sendUserDataObj = {
      firstName: user.firstName,
      lastName: user.lastName,
    };
    if (user.social_image) sendUserDataObj.image = user.social_image;
    if (user.image) {
      if (user.image.url) sendUserDataObj.image = user.image.url;
    }
    if (user.email) sendUserDataObj.email = user.email;
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json({
        error: false,
        message: "Successfully Logged In",
        user: sendUserDataObj,
      });
  } else {
    req.logout();
    console.log("not access");
    res.status(403).json({ error: true, message: "Login error" });
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

const logout = (req, res) => {
  req.logout();
  res.status(200).json("logout");
};
const checkRegularUser = (req, res, next) => {
  passport.authenticate("local", (err, user, message) => {
    if (message) {
      return next(createError(message.status, message.message));
    }
    if (user) {
      req.login(user, function (err) {
        if (err) {
          return next(err);
        }
        req.user = user;
        return next();
      });
    }
  })(req, res, next);
};

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
  checkRegularUser,
  goToGoogle,
  googleCalBack,
  goToFacebook,
  facebookCalBack,
};
