const Joi = require('joi');

const schemas = {
  router: {
    registration: {
      post: Joi.object()
        .keys({
          fullName: Joi.string().trim().required(),
          email: Joi.string().trim().email().required(),
          password: Joi.string().trim().required()
        })
        .required()
    },
    login: {
      post: Joi.object()
        .keys({
          email: Joi.string().trim().email().required(),
          password: Joi.string().trim().required()
        })
        .required()
    }
  }
};

module.exports = {
  schemas
};
