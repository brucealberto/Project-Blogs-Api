const postCategoryService = require('../services/postCategoryService');

const create = async (req, res) => {
  try {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;
    const createPostCat = await postCategoryService.create(title, content, categoryIds, userId);
    res.status(201).json(createPostCat);
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({
      message: '"categoryIds" not found',
    });
  }
};

module.exports = {
  create,
};