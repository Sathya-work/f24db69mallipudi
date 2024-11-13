const Invention = require('../models/inventions');

exports.invention_list = async function(req, res) {
  try {
      const inventions = await Invention.find();
      res.render('inventions', { results: inventions });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};
  
exports.invention_detail = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention detail: ' + req.params.id);
};

exports.invention_create_post = async function(req, res) {
  let document = new Invention();
  document.name = req.body.name;
  document.inventor = req.body.inventor;
  document.year = req.body.year;
  try {
    let result = await document.save();
    res.send(result);
  } catch (err) {
    res.status(500);
    res.send(`{"error": ${err}}`);
  }
};


exports.invention_delete = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention delete DELETE ' + req.params.id);
};

exports.invention_update_put = function(req, res) {
  res.send('NOT IMPLEMENTED: Invention update PUT ' + req.params.id);
};