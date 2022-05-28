const { User } = require('../models');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  console.log(user);
  if (!user || user.password !== password) throw new Error();
  return user;
};

module.exports = {
  loginService,
};