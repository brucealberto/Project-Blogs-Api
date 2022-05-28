const jwt = require('jsonwebtoken');

const secretPassword = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '10h',
  algorithm: 'HS256',
};

const generateJWT = (payload) => {
  const token = jwt.sign({ data: payload }, secretPassword, jwtConfig);
  return token;
};

module.exports = generateJWT;