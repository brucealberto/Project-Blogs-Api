const { User } = require('../database/models');

const create = async (displayName, email, password, image) => {
  const createUser = await User.create({ displayName, email, password, image });
  return createUser;
};

const listAll = async () => {
  const listAllUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  return listAllUsers;
};

const listById = async (id) => {
  const listUserId = await User.findByPk(id);
  console.log('🚀 ~ file: userService.js ~ line 15 ~ listById ~ listUserId', listUserId);
  delete listUserId.dataValues.password;
  if (!listUserId) throw new Error();
  return listUserId;
};

module.exports = {
  create,
  listAll,
  listById,
};
