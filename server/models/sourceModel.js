const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sourceSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
    sourceTitle: {
      type: String,
      trim: true,
    },
    sourceInfo: {
      type: String,
      trim: true,
    },
  },
  { timestamps: true }
);

// static method to make sure object exists
sourceSchema.statics.sourceCheck = async function (id) {
  try {
    const source = await this.findById(id);
    if (source) {
      return source;
    } else {
      let error = "none";
      return error;
    }
  } catch (err) {
    console.log(err);
  }
};

const Source = mongoose.model("Source", sourceSchema);
module.exports = Source;
