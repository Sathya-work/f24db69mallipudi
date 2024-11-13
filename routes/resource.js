var express = require('express');
var router = express.Router();

var api_controller = require('../controllers/api');
var invention_controller = require('../controllers/inventions');

router.get('/', api_controller.api);

router.post('/inventions', invention_controller.invention_create_post);

router.delete('/inventions/:id', invention_controller.invention_delete);

router.put('/inventions/:id', invention_controller.invention_update_put);

router.get('/inventions/:id', invention_controller.invention_detail);

router.get('/inventions', invention_controller.invention_list);

module.exports = router;
