const { User } = require('../database/models');

const create = async (displayName, email, password, image) => {
  const createUser = await User.create({ displayName, email, password, image });
  return createUser;
};

const listAll = async () => {
  const listAllUsers = await User.findAll({ attributes: { exclude: ['password'] } });
  // if (!listAllUsers) throw new Error();
  return listAllUsers;
};

module.exports = {
  create,
  listAll,
};
