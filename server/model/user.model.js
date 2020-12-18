import mongoose from  'mongoose';
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  days: [{
    type: [Schema.Types.ObjectId],
    link: 'Day'
  }],
  pleasures: [{
    type: Schema.Types.ObjectId,
    link: 'Pleasure'
  }]
})

export default mongoose.model('User', UserSchema);