const Comment = require("../models/Comment.model");

module.exports.commentsController = {
  addComment: async (req, res) => {
    try {
      await Comment.create({
        text: req.body.text,
        user: req.body.user,
        books: req.body.books,
        date: req.body.date,
        author: req.body.author,
      });
      res.json("Комментарий отправлен!");
    } catch (err) {
      res.json("Произошла ошибка при отправке комментария.");
    }
  },
  changeComment: async (req, res) => {
    try {
      await Comment.findByIdAndUpdate(req.params.id, {
        text: req.body.text,
        user: req.body.user,
        books: req.body.books,
        date: req.body.date,
        author: req.body.author,
      });
      res.json("Комментарий изменен!");
    } catch (err) {
      res.json("Произошла ошибка при изменении комментария.");
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findByIdAndDelete(req.params.id);
      res.json("Комментарий удален!");
    } catch (err) {
      res.json("Произошла ошибка при удалении комментария.");
    }
  },
  getComments: async (req, res) => {
    try {
      const comments = await Comment.find();
      res.json(comments);
    } catch (err) {
      res.json("Операция не удалась");
   
  },
};
