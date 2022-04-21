const Book = require("../models/Book.model");

module.exports.bookController = {
  addBook: async (req, res) => {
    const { title, description, category, condition, likes, author } =
      req.body;
    try {
      const books = await Book.create({
        img: req.file.path,
        title,
        description,
        category,
        condition,
        likes,
        author,
      });

      return res.json(books);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getBooks: async (req, res) => {
    try {
      const book = await Book.find();
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
    const { img, title, description, category, condition } =
      req.body;
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
};
