const { StatusCodes } = require('http-status-codes');

const { controller } = require('../../app/helpers/helper');
const service = require('./service');

const example = {
  post: async (req, res) => {
    await controller.sendJson(
      res,
      async (connection) => {
        return await service.example.post(connection, req.options);
      },
      StatusCodes.CREATED
    );
  }
};

module.exports = {
  example
};
