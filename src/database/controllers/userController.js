const express = require('express');

const userRoute = express.Router();
// const userService = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const validateBody = (body, res) => {
  // const { email, password } = body;
  const token = body;
  if (!token) {
    res.status(400).json({
      message: 'Invalid fields',
    });
    return false;
  }
  return true;
};

userRoute.post('/', async (req, res) => {
  try {
    const payload = req.body;
    // const createUser = await userService.create(email, password);
    const token = generateJWT(payload);
    if (!validateBody(req.body, res)) return;

    if (!token || token === 0) {
      return res
        .status(400)
        .json({ message: 'Some required fields are missing' });
    }
    
    return res.status(200).json(token);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'external server error!' });
  }
});

module.exports = userRoute;
