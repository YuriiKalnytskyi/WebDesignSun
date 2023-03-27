const { controller } = require('../../app/helpers/helper');
const { StatusCodes } = require('http-status-codes');
const service = require('./service');

const singIn = {
  post: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.singIn.post(connection, req.options);
      },
      StatusCodes.CREATED
    );
  }
};

const login = {
  post: async (req, res) => {
    await controller.sendJson(res, async (connection) => {
      return await service.login.post(connection, req.options);
    });
  }
};

const logout = {
  post: async (req, res) => {
    await controller.sendJson(res, async (connection) => {
      return await service.logout.post(connection, req.user);
    });
  }
};

module.exports = {
  singIn,
  login,
  logout
};
