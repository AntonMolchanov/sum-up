import mongoose from  'mongoose';
const Schema = mongoose.Schema

const SituationSchema = new Schema({
  date: {
    type: Date,
    required: true
  },
  
})

export default mongoose.model('Situation', SituationSchema);