const express = require('express');
const { loginController } = require('./controllers/loginController');
const { create, listAll, listById } = require('./controllers/userController');
const categoriesController = require('./controllers/categoriesController');
const loginMiddleware = require('./middlewares/loginMidlleware');
const {
  validateUser,
  validatePassword,
  validateEmail,
} = require('./middlewares/userMiddleware');
const authToken = require('./middlewares/authToken');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginMiddleware, loginController);
app.post('/user', validateUser, validatePassword, validateEmail, create);
app.post('/categories', authToken, categoriesController.create);

app.get('/user/:id', authToken, listById);
app.get('/user', authToken, listAll);
app.get('/categories', authToken, categoriesController.listAll);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
