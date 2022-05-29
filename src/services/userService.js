const { User } = require('../database/models');

const create = async (displayName, email, password, image) => {
  const createUser = await User.create({ displayName, email, password, image });
  
  return createUser;
};

module.exports = {
  create,
};
