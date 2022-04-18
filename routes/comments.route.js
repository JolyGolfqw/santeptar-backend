const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");

const router = Router();

router.post("/comments", commentsController.addCommentToBook);
router.get("/comments", commentsController.getComments);
router.delete("/comments/:id", commentsController.deleteCommentById);
router.patch("/comments/:id", commentsController.editCommentById);

module.exports = router;
