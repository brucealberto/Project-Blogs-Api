const categoryService = require('../services/categoriesService');

const create = async (req, res) => {
  try {
    const { name } = req.body;
    
    const createCategories = await categoryService.create(name);
    return res.status(201).json(createCategories);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      message: '"name" is required',
    });
  }
};

module.exports = { create };
