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

const listAll = async (req, res) => {
  try {
    const listAllCategories = await categoryService.listAll();
    return res.status(200).json(listAllCategories);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { create, listAll };
