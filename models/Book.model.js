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
  }]
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
