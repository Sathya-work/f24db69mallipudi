const Invention = require('../models/inventions');

exports.invention_list = async function(req, res) {
    try {
      const inventions = await Invention.find();
      res.send(inventions);
    } catch (err) {
      res.status(500).send(`{"error": ${err}}`);
    }
  };

exports.invention_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention detail: ' + req.params.id);
};

exports.invention_create_post = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention create POST');
};

exports.invention_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention delete DELETE ' + req.params.id);
};

exports.invention_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention update PUT ' + req.params.id);
};
