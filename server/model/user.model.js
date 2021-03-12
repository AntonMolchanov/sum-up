import mongoose from "mongoose";
const Schema = mongoose.Schema;

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
  situations: [
    {
      type: [Schema.Types.ObjectId],
      link: "Situation",
    },
  ],
  pleasures: [
    {
      type: Schema.Types.ObjectId,
      link: "Pleasure",
    },
  ],
});

export default mongoose.model("User", UserSchema);
