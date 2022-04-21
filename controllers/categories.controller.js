const Category = require("../models/Category.model");

module.exports.categoriesController = {
  addCategory: async (req, res) => {
    try {
      const category = await Category.create({
        category: req.body.category,
      });

      return res.json(category);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  getCategories: async (req, res) => {
    try {
      const categories = await Category.find();
      return res.json(categories);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },

  deleteCategoryById: async (req, res) => {
    try {
      const categories = await Category.findByIdAndRemove(req.params.id);
      res.json(categories);
    } catch (err) {
      res.json({ error: err.message });
    }
  },

  editCategoryById: async (req, res) => {
    try {
      const categories = await Category.findByIdAndUpdate(req.params.id, {
        category: req.body.category,
        image: req.body.image
      });
      res.json(categories);
    } catch (err) {
      return res.json({ error: err.message });
    }
  },
};
