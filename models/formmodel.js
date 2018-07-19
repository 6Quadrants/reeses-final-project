const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const formModel = new Schema({
    lastName: { type: String, required: true },
    formValue: {type: Number, required: true },
    saltyValue: { type: Number, required: true }
  // sweet: { type: Number, required: true },
  // meltable: { type: Number, required: true },
  // chewy: { type: Number, required: true },
  // smooth: { type: Number, required: true },

})

module.exports = mongoose.model('formmodel', formModel);