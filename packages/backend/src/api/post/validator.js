const Joi = require('joi');

const schemas = {
  router: {
    allPost: {
      get: Joi.object()
        .keys({
          page: Joi.number().required(),
          offset: Joi.number().required()
        })
        .required()
    },
    post: {
      post: Joi.object()
        .keys({
          direction: Joi.string().trim().required(),
          image: Joi.any().required(),
          title: Joi.string().required(),
          description: Joi.string().trim().required(),
          author: Joi.string().trim().required()
        })
        .required(),
      get: Joi.object()
        .keys({
          id: Joi.string().trim().required()
        })
        .required(),
      put: Joi.object()
        .keys({
          id: Joi.string().trim().required(),
          direction: Joi.string().trim().required(),
          image: Joi.any().required(),
          title: Joi.string().required(),
          description: Joi.string().trim().required(),
          author: Joi.string().trim().required()
        })
        .required()
    }
  }
};

module.exports = {
  schemas
};
