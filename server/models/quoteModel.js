const mongoose = require("mongoose");
var idValidator = require("mongoose-id-validator");
const Schema = mongoose.Schema;

const quoteSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    body: { type: String },
    tags: {
      type: Array,
      default: undefined,
    },
    userNotes: { type: String },
    location: { type: String },
    source: { type: String },
    fave: { type: Boolean, default: false },
  },
  { timestamps: true }
);

// static method to make sure object exists
quoteSchema.statics.quoteCheck = async function (id) {
  try {
    const quote = await this.findById(id);
    if (quote) {
      return quote;
    }
    throw Error("Quote Does Not Exist");
  } catch (err) {
    console.log(err);
  }
};

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
