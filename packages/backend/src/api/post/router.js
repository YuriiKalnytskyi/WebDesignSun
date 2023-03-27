const { validator } = require('../../app/helpers/helper');
const { schemas } = require('./validator');
const express = require('express');
const router = express.Router({});
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.get(
  '/all',
  validator.main(schemas.router.allPost.get),
  asyncHandler(controller.allPost.get)
);

router.get(
  '/specific',
  asyncHandler(controller.specificPost.get)
);

router.post('/', validator.main(schemas.router.post.post), asyncHandler(controller.post.post));

router.get('/:id', validator.main(schemas.router.post.get), asyncHandler(controller.post.get));

router.put('/:id', validator.main(schemas.router.post.put), asyncHandler(controller.post.put));

router.delete(
  '/:id',
  validator.main(schemas.router.post.get),
  asyncHandler(controller.post.delete)
);

module.exports = router;
