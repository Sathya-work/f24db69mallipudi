var express = require('express');
var router = express.Router();
var invention_controller = require('../controllers/inventions');

router.get('/', invention_controller.invention_list);

router.post('/create', invention_controller.invention_create_post);

router.get('/:id', invention_controller.invention_detail);

router.get('/:id/update', invention_controller.invention_update_get);

router.get('/:id/delete', invention_controller.invention_delete_get);

router.post('/:id/update', invention_controller.invention_update_post);

router.post('/:id/delete', invention_controller.invention_delete_post);

module.exports = router;