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
// Invention controller (controllers/inventions.js)
exports.invention_update_put = async function(req, res) {
  console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`);
  try {
      let toUpdate = await Invention.findById(req.params.id);
      // Update properties
      if (req.body.name) toUpdate.name = req.body.name;
      if (req.body.year) toUpdate.year = req.body.year;
      if (req.body.inventor) toUpdate.inventor = req.body.inventor;
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

//delete one
exports.invention_delete = async function(req, res) {
    console.log("delete " + req.params.id);
    try {
        const result = await Invention.findByIdAndDelete(req.params.id);
        console.log("Removed " + result);
        res.send(result);
    } catch (err) {
        res.status(500);
        res.send(`{"error": Error deleting ${err}}`);
    }
};

//single view
exports.invention_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id);
    try {
        result = await Invention.findById(req.query.id);
        res.render('inventionsdetail', 
            { title: 'Invention Detail', toShow: result });
    } catch (err) {
        res.status(500);
        res.send(`{'error': '${err}'}`);
    }
};
