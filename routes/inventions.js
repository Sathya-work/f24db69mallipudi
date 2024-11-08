var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('inventions', { title: 'Search Results - Inventions' });
});

module.exports = router;
