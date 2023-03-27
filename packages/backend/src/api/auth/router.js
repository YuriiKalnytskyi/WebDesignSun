const { validator, middlewares } = require('../../app/helpers/helper');
const { schemas } = require('./validator');
const express = require('express');
const router = express.Router({});
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.post(
  '/sing-in',
  validator.main(schemas.router.registration.post),
  asyncHandler(controller.singIn.post)
);

router.post(
  '/login',
  validator.main(schemas.router.login.post),
  asyncHandler(controller.login.post)
);

router.post('/logout', asyncHandler(middlewares.auth.user), asyncHandler(controller.logout.post));

module.exports = router;
