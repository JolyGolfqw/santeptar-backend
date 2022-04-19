// РИДВАН

const { Router } = require("express");

const { categoryController } = require("../controllers/categorys.controller");

const router = Router();

router.post("/", categoryController.addCategory);
router.get("/", categoryController.getCategory);

module.exports = router;
