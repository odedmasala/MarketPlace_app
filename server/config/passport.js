const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user/UserSchema");

const passport = (passport) => {
  /*INSERT USER TO PASSPORT-SESSION  */
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  /*REMOVE USER TO PASSPORT-SESSION  */
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
  /*LOCAL Strategy */
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
      },
      async (email, password, callback) => {
        try {
          const user = await User.findOne({ email: email });
          if (!user) {
            callback(null, false, {
              status: 404,
              message:
                "כתובת אימייל לא נכונה או משתמש לא קיים, אנא בדוק את האימייל",
            });
          }
          if (user.registerType) {
            if (user.registerType != "email") {
              callback(null, false, {
                status: 401,
                message: `המשמתש רשום תחת חיבור ממדיה חברתית, אנא נסה להתחבר בדרך אחרת`,
              });
            }
          }
          const isPasswordCorrect = await bcrypt.compare(
            password,
            user.password
          );
          if (!isPasswordCorrect) {
            callback(null, false, {
              status: 401,
              message: "כתובת אימייל לא נכונה או משתמש לא קיים",
            });
          }
          callback(null, user);
        } catch (error) {
          console.error(error);
          callback(error);
        }
      }
    )
  );

  /*GOOGLE Strategy */
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/api/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, callback) => {
        const user = {
          email: profile.emails[0].value,
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          google_id: profile.id,
          social_image: profile._json.picture,
          registerType: "google",
        };
        const checkUser = await User.findOne({ email: user.email });

        if (!checkUser) {
          const newUser = await new User(user).save();
          callback(null, newUser);
        }
        if (checkUser.registerType)
          if (checkUser.registerType != "google")
            callback(null, false, {
              status: 401,
              message: `המשמתש רשום תחת חיבור ממדיה חברתית, אנא נסה להתחבר בדרך אחרת`,
            });
        callback(null, checkUser);
      }
    )
  );
  /*FACEBOOK Strategy */
  passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACEBOOK_APP_SECRET,
        callbackURL: "/api/auth/facebook/callback",
        profileFields: [
          "id",
          "name",
          "displayName",
          "email",
          "picture.type(large)",
        ],
      },
      async (accessToken, refreshToken, profile, callback) => {
        const user = {
          facebook_id: profile._json.id,
          firstName: profile._json.last_name,
          lastName: profile._json.first_name,
          social_image: profile.photos[0].value,
          registerType: "facebook",
        };
        if (profile.email) user.email = profile.email;
        const checkUser = await User.findOne({ email: user.email });
        if (!checkUser) {
          const newUser = await new User(user).save();
          callback(null, newUser);
        }
        if (checkUser.registerType)
          if (checkUser.registerType != "facebook")
            callback(null, false, {
              status: 401,
              message: `המשמתש רשום תחת חיבור ממדיה חברתית, אנא נסה להתחבר בדרך אחרת`,
            });
        callback(null, checkUser);
      }
    )
  );
};

module.exports = passport;
