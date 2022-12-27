const {sendOneTimePassword} = require('../../controllers/otp/index')
const otpRoute = require("express").Router();


productRoute.post("/otp", sendOneTimePassword);

module.exports = otpRoute;
