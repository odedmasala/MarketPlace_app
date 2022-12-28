const jwt = require("jsonwebtoken");
const { createError } = require("../utils/errorSetting");

const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    req.logout();
  return  next(createError(401, "you are not authenticated!"));
  }

  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "token is not valid!"));
    req.user = user;
    next();
  });
};

const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
const verifyMeager = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.meager) {
      next();
    } else {
      return next(createError(403, "You are not authorized!"));
    }
  });
};
module.exports = {
  verifyToken,
  verifyUser,
  verifyAdmin,
  verifyMeager,
};
