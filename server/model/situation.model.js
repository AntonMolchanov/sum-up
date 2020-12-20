import mongoose from  'mongoose';
const Schema = mongoose.Schema

const SituationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  reasons: [String],
  positives: [String],
  dayWhen: {
    type: Schema.Types.ObjectId,
    link: 'Day',
    required: true
  },
  rationals: [String],
  subconscious: [String]
})

export default mongoose.model('Situation', SituationSchema);