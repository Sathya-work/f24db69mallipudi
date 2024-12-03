const mongoose = require("mongoose");

const inventionSchema = mongoose.Schema({
  name: String,
  year: {
    type: Number,
    required: true,
    min: [1000, 'Year must be at least 1000'],
    max: [2024, 'Year must not exceed 2024']
  },
  inventor: String
});

module.exports = mongoose.model("Invention", inventionSchema);