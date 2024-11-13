var express = require('express');
var router = express.Router();
var invention_controller = require('../controllers/inventions');

router.get('/', invention_controller.invention_list);

module.exports = router;