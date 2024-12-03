const mongoose = require("mongoose");

const inventionSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, 'Name must be at least 3 characters long'],
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  year: {
    type: Number,
    required: true,
    min: [1000, 'Year must be at least 1000'],
    max: [2024, 'Year must not exceed 2024']
  },
  inventor: {
    type: String,
    required: true,
  }
});

module.exports = mongoose.model("Invention", inventionSchema);