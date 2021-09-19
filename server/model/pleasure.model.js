import mongoose from 'mongoose';

const Schema = mongoose.Schema

const PleasureSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  owner: {
    type: Schema.Types.ObjectId,
    link: 'User',
    required: true
  }
})

export default mongoose.model('Pleasure', PleasureSchema);