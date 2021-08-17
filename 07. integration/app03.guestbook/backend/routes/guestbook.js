const express = require('express');
const controller = require('../controllers/guestbook');

const router = express.Router();
router.route('').get(controller.readAll);
router.route('/add').post(controller.create);

module.exports = router;