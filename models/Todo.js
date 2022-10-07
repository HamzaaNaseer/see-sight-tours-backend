const mongoose = require("mongoose");
const { Schema } = mongoose;

const TodoSchema = new Schema({
  title: {
    type: String,
    required: [true, "please provide some title"],
  },

  description: {
    type: String,
    required: [true, "please enter the description of the ad"],
  },
  status: {
    type: String,
    default: "pending",
  },
});

module.exports = mongoose.model("Todo", TodoSchema);
