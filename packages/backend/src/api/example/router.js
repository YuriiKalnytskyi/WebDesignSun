const { validator, middlewares } = require('../../app/helpers/helper');
const { schemas } = require('./validator');
const express = require('express');
const router = express.Router({});
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.post(
  '/example',
  // asyncHandler(middlewares.auth.user), // add  middleware
  // validator.main(schemas.router.example.post), // add validation scheme
  asyncHandler(controller.example.post)
);

module.exports = router;
