const Book = require("../models/Book.model");

module.exports.bookController = {
  //! POST
  addBook: async (req, res) => {
    const { img, title, discription, category, condition, likes, book } =
      req.body;
    try {
      const books = await Book.create({
        img,
        title,
        discription,
        category,
        condition,
        likes,
        book,
      });

      return res.json(books);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  //! GET
  getBooks: async (req, res) => {
    try {
      const book = await Book.find();
      return res.json(book);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  //! DELETE
  deleteBookById: async (req, res) => {
    try {
      const book = await Book.findByIdAndRemove(req.params.id);
      res.json(book);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  //! PATCH
  editBookById: async (req, res) => {
    const { img, title, discription, category, condition, likes, book } =
      req.body;
    try {
      const books = await Book.findByIdAndUpdate(req.params.id, {
        img,
        title,
        discription,
        category,
        condition,
        likes,
        book,
      });
      res.json(books);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
};
