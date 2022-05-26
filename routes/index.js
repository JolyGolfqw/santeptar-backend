const { Router } = require("express");

const router = Router();

router.use(require("./categories.route"));
router.use(require("./books.route"));
router.use(require("./comments.route"));
router.use(require("./users.route"));

module.exports = router;
