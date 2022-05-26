const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    try {
      const comment = await Comment.create({
        text: req.body.text,
        user: req.body.user,
        books: req.body.books,
        date: req.body.date,
        author: req.body.author,
      });
      return res.json(comment);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  changeComment: async (req, res) => {
    try {
      const comment = await Comment.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        user: req.body.user,
        books: req.body.books,
        date: req.body.date,
        author: req.body.author,
      });
      return res.json(comment);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  deleteComment: async (req, res) => {
    try {
      const comment = await Comment.findById(req.params.id);
      await comment.remove();
      return res.json(comment);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getComments: async (req, res) => {
    try {
      const comments = await Comment.find().populate("user");
      return res.json(comments);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
