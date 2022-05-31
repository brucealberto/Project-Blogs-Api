const jwt = require('jsonwebtoken');
// const { User } = require('../database/models');

const secretPassword = process.env.JWT_SECRET;

const authToken = async (req, res, next) => {
  try {
    const tokenHeader = req.headers.authorization;
    if (!tokenHeader) return res.status(401).json({ message: 'Token not found' });
    const decoded = jwt.verify(tokenHeader, secretPassword);
    // const userMatch = await User.findAll({
    //   where: { email: decoded.data.email },
    // });
    req.user = decoded.data;
  } catch (error) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
  next();
};
module.exports = authToken;
// if (!userMatch) {
  // return res.status(401).json({
    // message: 'Expired or invalid token',
  // });
// }