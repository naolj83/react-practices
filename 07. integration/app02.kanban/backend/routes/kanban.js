const express = require('express');
const controller = require('../controllers/kanban');

const router = express.Router();
router.route('/cards').get(controller.readAllCards);

module.exports = router;