var express = require('express');
var router = express.Router();
var invention_controller = require('../controllers/inventions');
const passport = require('passport');

const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

router.get('/', invention_controller.invention_list);

router.post('/', invention_controller.invention_create_post);

//router.get('/:id', invention_controller.invention_update_get);

//router.get('/:id', invention_controller.invention_delete_get);

router.put('/inventions:id', invention_controller.invention_update_put);

router.delete('/inventions:id', invention_controller.invention_delete);

router.get('/inventions:id', invention_controller.invention_detail);

router.get('/detail', invention_controller.invention_view_one_Page);

router.get('/create', invention_controller.invention_create_Page);

router.get('/update', secured, invention_controller.invention_update_Page);

router.get('/delete', invention_controller.invention_delete_Page);

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});


module.exports = router;