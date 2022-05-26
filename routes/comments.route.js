const { Router } = require("express");
const { commentsController } = require("../controllers/comments.controller");
const router = Router();

router.post("/comments", commentsController.addComment);
router.patch("/comments/:id", commentsController.changeComment);
router.delete("/comments/:id", commentsController.deleteComment);
router.get("/comments", commentsController.getComments);

module.exports = router;
