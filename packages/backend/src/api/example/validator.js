const Joi = require('joi');

const schemas = {
  router: {
    example: {
      post: Joi.object()
        .keys({
          example: Joi.string().trim().required()
        })
        .required()
    }
  }
};

module.exports = {
  schemas
};
