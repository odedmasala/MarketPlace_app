const passport = require("passport");
const bcrypt = require("bcrypt");
const { createOneUser } = require("../user/DAL");
const { createError } = require("../../utils/errorSetting");

const register = async (req, res, next) => {
  if (!req.body) next(createError(403, "need user form"));
  if (!req.body.user) next(createError(403, "need user form"));
  try {
    const { email, firstName, lastName, phone, password } = req.body.user;
    console.log(req.body);
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const createdMassage = createOneUser({
      firstName: firstName,
      lastName: lastName,
      email: email,
      phone: phone,
      password: hash,
      email: "email",
    });
    res.status(201).json({ createdMassage, create: true });
  } catch (err) {
    next(err);
  }
};

const redirectLogin = (req, res) => req.redirect("http://localhost:3000/login");
const loginSuccess = (req, res) => {
  const { user } = req;
  if (user) {
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
    console.log(sendUserDataObj);

    res.cookie("access_token", token, { httpOnly: true }).status(200).json({
      error: false,
      message: "Successfully Logged In",
      user: sendUserDataObj,
    });
  } else {
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
  checkRegularUser,
  goToGoogle,
  googleCalBack,
  goToFacebook,
  facebookCalBack,
};
