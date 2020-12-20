import mongoose from  'mongoose';
const Schema = mongoose.Schema

const DaySchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  situations: [{
    type: Schema.Types.ObjectId,
    link: 'Situation',
    default: []
  }],
  pleasures: [{
    type: Schema.Types.ObjectId,
    link: 'Pleasure',
    default: []
  }],
  owner: {
    type: Schema.Types.ObjectId,
    link: 'User',
    required: true
  }
})

export default mongoose.model('Day', DaySchema);