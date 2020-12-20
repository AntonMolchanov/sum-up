import mongoose from  'mongoose';
const Schema = mongoose.Schema

const PleasureSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  dayWhen: {
    type: Schema.Types.ObjectId,
    link: 'Day'
  }
})

export default mongoose.model('Pleasure', PleasureSchema);