const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");
const fileMiddleware = require("../middleware/fileMiddleware");

const router = Router();

router.post("/books", fileMiddleware.single("img"), bookController.addBook);
router.get("/books", bookController.getBooks);
router.patch("/books/:id", bookController.editBookById);
router.patch("/books/:id/edit", bookController.continueBook);
router.patch("/book/:id/like", bookController.like);
router.patch("/book/:id/unlike", bookController.unLike);
router.delete("/books/:id", bookController.deleteBookById);

module.exports = router;
