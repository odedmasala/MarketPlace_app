const twilio = require("twilio")(process.env.SID, process.env.AUTH_TOKEN);
const { findAllUsers } = require('../user/DAL');

const randomPassword = ()=>{
    return Math.floor(1000 + Math.random() * 9000);
}

const sendOneTimePassword = async (req, res, next) => {
  try {
    const userPhone = req.body.phone;
    const user = await findAllUsers({ phone: userPhone });
    if (user) {
      twilio.messages
        .create({
          from: "+19452392240",
          to: "+972524450562",
          body: `${randomPassword()}`,
        })
        .then((res) => res.body)
        .catch((err) => console.log(err));
    }
  } catch (e) {
    return e;
  }
};

module.exports ={sendOneTimePassword}
