const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const projectSchema = Schema(
  {
    _id: Schema.Types.ObjectId,
    user: { type: Schema.Types.ObjectId, ref: "User" },
    projectName: {
      type: String,
      trim: true,
    },
    quotes: [{ type: Schema.Types.ObjectId, ref: "Quote" }],
  },
  { timestamps: true }
);

// static method to make sure object exists
projectSchema.statics.projectCheck = async function (id) {
  try {
    const project = await this.findById(id);
    if (project) {
      return project;
    }
    throw Error("Project Does Not Exist");
  } catch (err) {
    console.log(err);
  }
};

const Project = mongoose.model("Project", projectSchema);
module.exports = Project;
