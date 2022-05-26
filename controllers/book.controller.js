const Book = require("../models/Book.model");

module.exports.bookController = {
  addBook: async (req, res) => {
    const {
      title,
      description,
      category,
      condition,
      tags,
      author,
      mainCharacters,
      text,
    } = req.body;
    try {
      const books = await Book.create({
        img: req.file.path,
        title,
        description,
        category,
        condition,
        tags,
        author,
        text,
        mainCharacters,
      });
      return res.json(books);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getBooks: async (req, res) => {
    try {
      const book = await Book.find().populate("author");
      return res.json(book);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  deleteBookById: async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  editBookById: async (req, res) => {
    const { img, title, description, category, condition } = req.body;
    try {
      const books = await Book.findByIdAndUpdate(req.params.id, {
        img,
        title,
        description,
        category,
        condition,
      });
      res.json(books);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  like: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        $push: {
          likes: req.body.likes,
        },
      });
      res.json(book);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  unLike: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        $pull: {
          likes: req.body.likes,
        },
      });
      res.json(book);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  continueBook: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
      });
      res.json(book);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
};
