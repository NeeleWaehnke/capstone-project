import mongoose from 'mongoose';

const { Schema } = mongoose;

const storageSchema = new Schema({
  name: { type: String, required: true },
  user: { type: String, required: true },
});

const Storage =
  mongoose.models.Storage || mongoose.model('Storage', storageSchema);

export default Storage;
