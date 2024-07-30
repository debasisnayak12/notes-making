const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: { type: String },
    email: { type: String },
    pass: { type: String },
    creationDateTime: {
      type: Date,
      default: new Date().getTime()
    },
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = {
  UserModel,
};
