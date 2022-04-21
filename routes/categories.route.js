const { Router } = require("express");

const { categoryController } = require("../controllers/categories.controller");

const router = Router();

router.post("/categories", categoryController.addCategory);
router.get("/categories", categoryController.getCategory);

module.exports = router;
