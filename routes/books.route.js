const { Router } = require("express");
const { bookController } = require("../controllers/book.controller");

const router = Router();

router.post("/books", bookController.addBook);
router.get("/books", bookController.getBooks);
router.patch("/books/:id", bookController.editBookById);
router.delete("/books/:id", bookController.deleteBookById);

module.exports = router;
