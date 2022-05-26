const Category = require("../models/Category.model");

module.exports.categoryController = {
  addCategory: async (req, res) => {
    try {
      const category = await Category.create({
        name: req.body.name,
      });
      return res.json(category);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
  getCategory: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
