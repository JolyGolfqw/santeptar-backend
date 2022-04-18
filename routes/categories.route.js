const { Router } = require("express");
const { categoriesController } = require("../controllers/categories.controller");

const router = Router();

router.post("/categories", categoriesController.addCategory);
router.get("/categories", categoriesController.getCategories);
router.delete("/categories/:id", categoriesController.deleteCategoryById);
router.patch("/categories/:id", categoriesController.editCategoryById);

module.exports = router;
