const { Category } = require('../database/models');

const create = async (name) => {
  if (!name) throw new Error();
  const createUser = await Category.create({ name });
  return createUser;
};

const listAll = async () => {
  const listAllCategories = await Category.findAll();
  return listAllCategories;
};

module.exports = {
  create,
  listAll,
};
