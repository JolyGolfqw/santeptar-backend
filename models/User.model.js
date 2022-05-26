const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  avatar: {
    type: String,
    default: "images\\user.png",
  },

  name: { type: String, required: true },

  login: {
    type: String,
    unique: true,
  },

  description: String,

  password: {
    type: String,
    required: true,
  },

  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
});

const User = mongoose.model("User", userSchema);

module.exports = User;
