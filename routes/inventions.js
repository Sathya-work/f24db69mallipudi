var express = require('express');
var router = express.Router();
var invention_controller = require('../controllers/inventions');

router.get('/', invention_controller.invention_list);

router.post('/', invention_controller.invention_create_post);

router.get('/:id', invention_controller.invention_update_get);

router.get('/:id', invention_controller.invention_delete_get);

router.put('/:id', invention_controller.invention_update_put);

router.delete('/:id', invention_controller.invention_delete);

router.get('/:id', invention_controller.invention_detail);

module.exports = router;