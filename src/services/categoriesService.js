const { Category } = require('../database/models');

const create = async (name) => {
  if (!name) throw new Error();
  const createUser = await Category.create({ name });
  return createUser;
};

module.exports = {
  create,
};
