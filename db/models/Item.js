import mongoose from 'mongoose';

const { Schema } = mongoose;

const itemSchema = new Schema({
  name: { type: String, required: true },
  date: { type: String, required: true },
  quantity: { type: String, required: false },
  storage: { type: String, required: true },
  warningActive: { type: Boolean, required: false },
});

const Item = mongoose.models.Item || mongoose.model('Item', itemSchema);

export default Item;
