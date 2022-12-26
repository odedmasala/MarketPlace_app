const GoogleStrategy = require("passport-google-oauth20").Strategy;
const FacebookStrategy = require("passport-facebook").Strategy;
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../models/user/UserSchema");

const passport = (passport) => {
  /*LOCAL Strategy */
  passport.use(
    new LocalStrategy(
      {
        usernameField: "email",
        passwordField: "password",
        session: false,
      },
      async (email, password, callback) => {
        const user = await User.find({ email: email });
        if (!user)
          return callback(null, false, {
            message: "That email is not registered",
          });
        if (user.scope)
          if (user.scope != "email")
            return callback(null, false, {
              message: `That user connected with social access, get in with ${user.scope}`,
            });
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect)
          return callback(null, false, {
            message: "That password is not Correct",
          });
        callback(null, user);
      }
    )
  );

  /*GOOGLE Strategy */
  passport.use(
    new GoogleStrategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/callback",
        scope: ["profile", "email"],
      },
      async (accessToken, refreshToken, profile, callback) => {
        const user = {
          email: profile.emails[0].value,
          firstName: profile._json.given_name,
          lastName: profile._json.family_name,
          google_id: profile.id,
          social_image: profile._json.picture,
          source: "google",
        };
        const checkUser = await User.findOne({ email: user.email });
        if (!checkUser) {
          const newUser = await new User(user).save();
          return callback(null, newUser);
        }

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
        callbackURL: "/auth/facebook/callback",
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
          source: "facebook",
        };
        if (profile.email) user.email = profile.email;
        const checkUser = await User.findOne({ email: user.email });
        if (!checkUser) {
          const newUser = await new User(user).save();
          return callback(null, newUser);
        }
        callback(null, checkUser);
      }
    )
  );
  /*INSERT USER TO PASSPORT-SESSION  */
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  /*REMOVE USER TO PASSPORT-SESSION  */
  passport.deserializeUser((user, done) => {
    done(null, user);
  });
};

module.exports = passport;
