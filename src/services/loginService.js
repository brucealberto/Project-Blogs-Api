const { User } = require('../database/models');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email } });
  console.log(email, password);
  console.log('loginService.js ~ loginService ~ user', user);
  if (!user || user.password !== password) throw new Error();
  return user;
};

module.exports = {
  loginService,
};