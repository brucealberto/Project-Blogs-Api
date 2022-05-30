const userService = require('../services/userService');
const generateJWT = require('../utils/generateJWT');

const create = async (req, res) => {
  try {
    const { displayName, email, password, image } = req.body;
    const createUser = await userService.create(
      displayName,
      email,
      password,
      image,
    );
    const token = generateJWT(createUser);
    return res.status(201).json({ token });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: 'external server error!' });
  }
};

const listAll = async (req, res) => {
  try {
    const user = await userService.listAll();
    return res.status(200).json(user);
  } catch (error) {
    return res.status(401).end();
  }
};

const listById = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('🚀 ~ file: userController.js ~ line 33 ~ listById ~ id', id);
    const listUserId = await userService.listById(id);
    console.log('🚀 ~ file: userController.js ~ line 35 ~ listById ~ listUserId', listUserId);
    return res.status(200).json(listUserId);
  } catch (error) {
    console.log(error.message);
    return res.status(404).json({
      message: 'User does not exist',
    });
  }
};

module.exports = {
  create,
  listAll,
  listById,
};

/**
 * {
  "displayName": "Brett Wiltshire",
  "email": "brett@email.com",
  "password": "123456",
  "image": "http://4.bp.blogspot.com/_YA50adQ-7vQ/S1gfR_6ufpI/AAAAAAAAAAk/1ErJGgRWZDg/S45/brett.png"
}
 */
