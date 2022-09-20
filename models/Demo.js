const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

let DemoSchema = mongoose.Schema(
  {
    id: {
      type: ObjectId,
    },
    name: {
      type: String,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("demo", DemoSchema);