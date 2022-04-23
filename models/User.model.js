const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  avatar: {
    type: String,
    default:
      "images\\kisspng-avatar-user-computer-icons-software-developer-5b327cc98b5780.5684824215300354015708.jpg",
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
