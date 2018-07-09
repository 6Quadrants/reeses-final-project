const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const reesesSchema = new Schema({
  product: { type: String, required: true },
  chocolate: { type: Number, required: true },
  peanutbutter: { type: Number, required: true },
  meltiness: { type: Number, required: true },
  chewiness: { type: Number, required: true },
  softness: { type: Number, required: true },
  crunchiness: { type: Number, required: true },

});

const Reeses = mongoose.model("Reeses", reesesSchema);

module.exports = Reeses;
