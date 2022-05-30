const express = require('express');
const { loginController } = require('./controllers/loginController');
const { create, listAll } = require('./controllers/userController');
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
app.get('/user', authToken, listAll);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
