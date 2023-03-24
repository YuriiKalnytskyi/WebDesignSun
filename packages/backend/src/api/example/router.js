const express = require('express');
const router = express.Router({});
const asyncHandler = require('express-async-handler');
const controller = require('./controller');

router.post('/example', asyncHandler(controller.example.post));

module.exports = router;
