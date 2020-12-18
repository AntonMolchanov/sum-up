import mongoose from  'mongoose';
const Schema = mongoose.Schema

const DaySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  situations: {
    type: Schema.Types.ObjectId,
    link: 'Situation'
  },
  owner: {
    type: Schema.Types.ObjectId,
    link: 'User'
  }
})

export default mongoose.model('Day', DaySchema);