// const Joi = require('joi');

// const validateUser = Joi.object({
//   displayName: Joi.string().min(8).required(),
//   email: Joi.string().email().required(),
//   password: Joi.string().min(6).required(),
// })
const { User } = require('../database/models');

const validateUser = (req, res, next) => {
  const name = req.body;
  if (name.displayName.length < 8 || !name.displayName) {
    return res.status(400).json({
      message: '"displayName" length must be at least 8 characters long',
    });
  }
  next();
};

const validateEmail = async (req, res, next) => {
  const validEmail = req.body;
  const valid1 = validEmail.email.includes('@');
  const valid2 = validEmail.email.includes('.com');
  if (!valid1 || !valid2) {
    return res.status(400).json({
      message: '"email" must be a valid email',
    });
  }
  const dataEmail = await User.findOne({ where: { email: validEmail.email } });
  if (dataEmail) {
    return res.status(409).json({
      message: 'User already registered',
    });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const validPassword = req.body;
  if (validPassword.password.length < 6) {
    return res.status(400).json({
      message: '"password" length must be at least 6 characters long',
    });
  }
  next();
};

module.exports = {
  validateUser,
  validateEmail,
  validatePassword,
};
