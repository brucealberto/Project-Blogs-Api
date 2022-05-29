require('dotenv').config();
const app = require('./api');
const { loginController } = require('./controllers/loginController');
const { userController } = require('./controllers/userController');
const loginMiddleware = require('./middlewares/loginMidlleware');
const userMiddleware = require('./middlewares/userMiddleware');
// não remova a variável `API_PORT` ou o `listen`
const port = process.env.API_PORT || 3000;

// não remova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});
app.post('/login', loginMiddleware, loginController);
app.post(
  '/user',
  userMiddleware.validateUser,
  userMiddleware.validatePassword,
  userMiddleware.validateEmail,
  userController,
);

app.listen(port, () => console.log('ouvindo porta', port));
