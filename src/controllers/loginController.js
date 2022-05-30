const { loginService } = require('../services/loginService');

const generateJWT = require('../utils/generateJWT');

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await loginService(email, password);
    const token = generateJWT(user);
    
    res.status(200).json({ token });
  } catch (error) {
    console.log('loginController.js ~ loginController ~ error', error);
    res.status(400).json({ message: 'Invalid fields' });
  }
};

module.exports = {
  loginController,
};
