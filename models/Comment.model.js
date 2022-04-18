const mongoose = require("mongoose");

const commentSchema = mongoose.Schema({
    text: String,
    user: {
        ref: "User",
        type: mongoose.Schema.Types.ObjectId,
    },
    books: {
        ref: "book",
        type: mongoose.Schema.Types.ObjectId,
    },
    date: Number,
    author: String,
    required: true,
});

const Comment = mongoose.model("Comment", commentSchema);

module.exports = Comment;