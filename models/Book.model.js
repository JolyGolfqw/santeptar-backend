const mongoose = require("mongoose");

const bookSchema = mongoose.Schema({
  img: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  discription: {
    type: String,
    required: true,
  },

  category: {
    ref: "Category",
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },

  condition: {
    //состояние
    type: Boolean,
    required: true,
  },

  likes: [
    {
      ref: "User",
      type: mongoose.Schema.Types.ObjectId,
    },
  ],

  book: {
    //книги самого автора
    ref: "User",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
