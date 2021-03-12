import mongoose from "mongoose";
const Schema = mongoose.Schema;

const SituationSchema = new Schema({
  author: {
    type: Schema.Types.ObjectId,
    link: "User",
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  reasons: String,
  positives: String,
  day: Date,
  rationals: String,
  subconscious: String,
});

export default mongoose.model("Situation", SituationSchema);
