const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const reesesModel = new Schema({

  product: { type: String, required: true },
  chocolate: { type: Number, required: true },
  peanutbutter: { type: Number, required: true },
  
})

module.exports = mongoose.model('reeses', reesesModel);