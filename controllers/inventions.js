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

exports.invention_detail = async function(req, res) {
  try {
      const invention = await Invention.findById(req.params.id);
      if (!invention) {
          res.status(404).send('Invention not found');
          return;
      }
      res.render('invention_detail', { invention });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};

exports.invention_update_get = async function(req, res) {
  try {
      const invention = await Invention.findById(req.params.id);
      if (!invention) {
          res.status(404).send('Invention not found');
          return;
      }
      res.render('invention_update', { invention });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};

exports.invention_delete_get = async function(req, res) {
  try {
      const invention = await Invention.findById(req.params.id);
      if (!invention) {
          res.status(404).send('Invention not found');
          return;
      }
      res.render('invention_delete', { invention });
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};

exports.invention_update_post = async function(req, res) {
  res.send('NOT IMPLEMENTED: Invention update POST ' + req.params.id);
};

exports.invention_delete_post = async function(req, res) {
  res.send('NOT IMPLEMENTED: Invention delete POST ' + req.params.id);
};
