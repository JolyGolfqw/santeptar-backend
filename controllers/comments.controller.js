const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  //! POST
  addCommentToBook: async (req, res) => {
    const { text, user, book, author } = req.body;
    try {
      const comment = await Comment.create({
        text,
        user,
        book,
        author,
      });
      res.json(comment);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  //! GET
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  //! DELETE
  deleteCommentById: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndRemove(req.params.id);
      res.json(comment);
    } catch (err) {
      res.json({ error: err.message });
    }
  },
  //! PATCH
  editCommentById: async (req, res) => {
    const { text, user, book, author } = req.body;
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, {
        text,
        user,
        book,
        author,
      });
      res.json(comment);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
