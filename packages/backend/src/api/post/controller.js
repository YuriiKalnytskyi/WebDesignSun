const { controller } = require('../../app/helpers/helper');
const { StatusCodes } = require('http-status-codes');
const service = require('./service');

const allPost = {
  get: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.allPost.get(connection, req.options);
      },
      StatusCodes.CREATED
    );
  }
};
const specificPost = {
  get: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.specificPost.get(connection, req.options);
      },
      StatusCodes.CREATED
    );
  }
};

const post = {
  post: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.post.post(connection, req.options);
      },
      StatusCodes.CREATED
    );
  },
  get: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.post.get(connection, req.options);
      },
      StatusCodes.CREATED
    );
  },
  put: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.post.put(connection, req.options);
      },
      StatusCodes.CREATED
    );
  },
  delete: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.post.delete(connection, req.options);
      },
      StatusCodes.CREATED
    );
  }
};

module.exports = {
  allPost,
  post,
  specificPost
};
