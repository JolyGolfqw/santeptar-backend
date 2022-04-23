const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  img: {
    type: String,
    // required: true,
  },

  title: {
    type: String,
    // required: true,
  },

  description: {
    type: String,
    // required: true,
  },

  text: {
    type: String
  },

  category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
    // required: true,
  },

  condition: {
    //состояние
    type: Boolean,
    // required: true,
  },

  likes: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],

  author: {
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },

  tags: [{
    type: String
  }],

  mainCharacters: [{
    type: String
  }],

  date: {
    type: Date,
    default: Date.now
  }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
