const mongoose = require("mongoose")
const inventionSchema = mongoose.Schema({
costume_type: String,
size: String,
cost: Number
})
module.exports = mongoose.model("inventions",inventionSchema)