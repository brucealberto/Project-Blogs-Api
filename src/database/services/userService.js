const { User } = require('../models');

const create = async (email, password) => {
  const createUser = await User.create({ email, password });
  return createUser;
};

module.exports = {
  create,
};
