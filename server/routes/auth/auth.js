const router = require("express").Router();
const passport = require("passport");
const {
  loginFailed,
  loginSuccess,
  logout,
  register,
  redirectLogin,
  goToGoogle,
  googleCalBack,
  goToFacebook,
  facebookCalBack,
  // login,
  checkRegularUser,
  loginSuccessUser,
} = require("../../controllers/auth");

router.post("/register", register);

router.post("/login", checkRegularUser, loginSuccess);

router.get("/login/success", loginSuccess);

router.get("/login/failed", loginFailed);

router.get("/logout", logout);

router.get("/google", goToGoogle);

router.get("/google/callback", googleCalBack);

router.get("/facebook", goToFacebook);

router.get("/facebook/callback", facebookCalBack);

module.exports = router;
