const Invention = require('../models/inventions');

//Get all Read
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

//create one
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

//put one update
exports.invention_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
  try {
      let toUpdate = await Invention.findById(req.params.id);
      // Update properties
      if (req.body.invention_name) toUpdate.invention_name = req.body.invention_name;
      if (req.body.invention_year) toUpdate.invention_year = req.body.invention_year;
      if (req.body.invention_cost) toUpdate.invention_cost = req.body.invention_cost;
      let result = await toUpdate.save();
      console.log("Success " + result);
      res.send(result);
  } catch (err) {
      res.status(500);
      res.send(`{"error": ${err}: Update for id ${req.params.id} failed`);
  }
};

//read one
exports.invention_detail = async function(req, res) {
  console.log("detail" + req.params.id);
  try {
      let result = await Invention.findById(req.params.id);
      res.send(result);
  } catch (error) {
      res.status(500);
      res.send(`{"error": document for id ${req.params.id} not found`);
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

//delete one
exports.invention_delete = async function(req, res) {
  try {
      const result = await Invention.findByIdAndDelete(req.params.id);
      if (!result) {
          res.status(404).send('Invention not found');
          return;
      }
      res.send(`Invention with id ${req.params.id} was deleted.`);
  } catch (err) {
      res.status(500).send(`Error: ${err}`);
  }
};
