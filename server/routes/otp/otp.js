const {sendOneTimePassword} = require('../../controllers/otp/index')
const otpRoute = require("express").Router();


otpRoute.post("/", sendOneTimePassword);

module.exports = otpRoute;
