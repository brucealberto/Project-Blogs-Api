// const jwt = require('jsonwebtoken');

// const secretPassword = process.env.JWT_SECRET;

// const tokenMiddleware = (req, res, next) => {
//   try {
//     const tokenHeader = req.headers.authorization;

//     if (!tokenHeader) {
//  return res.status(401).json({
//       message: 'Token not found',
//     }); 
// }
//   } catch (error) {
//   console.log('🚀 ~ file: tokenMiddleware.js ~ line 9 ~ tokenMiddleware ~ error', error);
//   }
// };

// module.exports = tokenMiddleware;