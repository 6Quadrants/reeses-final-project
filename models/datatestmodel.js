import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const datatestModel = new Schema({
product: { type: String, required: true },
  chocolate: { type: Number, required: true },
  peanutbutter: { type: Number, required: true },
})

export default mongoose.model('datatest', datatestModel)