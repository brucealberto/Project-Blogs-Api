// const { Op } = require('sequelize');
const { BlogPost, Category, PostCategory } = require('../database/models');
// fonte:https://sequelize.org/docs/v6/core-concepts/model-querying-finders/#findandcountall
const findCategory = async (categoryIds) => {
  const { rows } = await Category.findAndCountAll({
    where: { id: categoryIds },
    // {
      //   id: {
        //     [Op.in]: categoryIds,
        //   },
      });
      return rows;
    };
    
// fonte:https://sequelize.org/docs/v6/core-concepts/model-querying-basics/#creating-in-bulk
const insertPostCat = async (arrayId) => {
 await PostCategory.bulkCreate(arrayId); 
};

const create = async (title, content, categoryIds, userId) => {
  const rows = await findCategory(categoryIds);
  console.log('🚀 ~ file: postCategoryService.js ~ line 22 ~ create ~ rows', rows);
  if (rows.length === 0) throw new Error();
  const createBlog = await BlogPost.create({ title, content, userId });
  console.log('🚀 ~ file: postCategoryService.js ~ line 25 ~ create ~ createBlog', createBlog);
  const arrayId = rows.map((array) => ({
      categoryId: array.id,
      postId: createBlog.id,
    }));
  console.log('🚀 ~ file: postCategoryService.js ~ line 30 ~ arrayId ~ arrayId', arrayId);
  await insertPostCat(arrayId);
  return createBlog;
};

module.exports = {
  create,
};
