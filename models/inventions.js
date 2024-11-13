const mongoose = require("mongoose");

const inventionSchema = mongoose.Schema({
  name: String,
  year: Number,
  inventor: String
});

module.exports = mongoose.model("Invention", inventionSchema);