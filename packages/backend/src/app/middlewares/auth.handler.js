const doom = require('../helpers/doom.helper');
const config = require('../helpers/config.helper');
const JWT = require('jsonwebtoken');

const auth = (secret) => {
  return async (req, res, next) => {
    let bearerToken = req.headers.authorization;
    if (bearerToken === undefined) {
      return doom.error.tokenNotFound(res);
    }

    let token = bearerToken.split(' ');
    if (Array.isArray(token) && token.length === 2) {
      token = token[1];
    } else {
      return doom.error.tokenNotValid(res);
    }
    let decode;
    try {
      decode = JWT.verify(token, secret);
    } catch (e) {
      if (e.name === JWT.TokenExpiredError.name) {
        return doom.error.tokenExpired(res);
      } else {
        return doom.error.tokenNotValid(res);
      }
    }
    req.user = {};
    req.user.id = decode.sub;
    next();
  };
};

const admin = async (req, res, next) => {
  let bearerToken = req.headers.authorization;
  if (bearerToken === undefined) {
    return doom.error.tokenNotFound(res);
  }

  let token = bearerToken.split(' ');
  if (Array.isArray(token) && token.length === 2) {
    token = token[1];
  } else {
    return doom.error.tokenNotValid(res);
  }

  let decoded = JWT.verify(token, process.env.ACCESSTOKEN);

  if (decoded.type !== process.env.ADMIN_TYPE) {
    return doom.error.adminRights(res);
  }
  req.user = {};
  req.user.id = decoded.sub;
  next();
};

module.exports = {
  user: auth(config.JWT.secret.user.accessToken),
  admin
};
