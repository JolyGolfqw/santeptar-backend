const Category = require("../models/Category.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      await Category.create({
        name: req.body.name,
      });
      res.json("Категория добавлена");
    } catch (err) {
      res.json(err);
    }
  },
  getCategory: async (req, res) => {
    try {
      const find = await Category.find();
      res.json(`${find} : Категории выведены.`);
    } catch (err) {
      res.json({error: err.message});
    }
  },
};
