const express = require('express')
const routes = express.Router()
const SessionController = require("../app/controller/SessionController")
const UserController = require("../app/controller/UserController")

const UserValidator = require("../app/validators/user")
const SessionValidator = require("../app/validators/session")

const { isLoggedRedirectToUsers, onlyUsers } = require("../app/middlewares/session")

// LOGIN/LOGOUT
routes.get('/login', isLoggedRedirectToUsers, SessionController.loginForm)
routes.post('/login',SessionValidator.login , SessionController.login)
routes.post('/logout', SessionController.logout)

// RESET PASSWORD / FORGOT
routes.get('/forgot-password', SessionController.forgotForm)
routes.get('/password-reset', SessionController.resetForm)
routes.post('/forgot-password', SessionValidator.forgot, SessionController.forgot)
routes.post('/password-reset', SessionValidator.reset, SessionController.reset)

// USER REGISTER UserController
routes.get('/register', UserController.registerForm)
routes.post('/register', UserValidator.post, UserController.post)

routes.get('/', onlyUsers, UserValidator.show, UserController.show)
routes.put('/',UserValidator.update, UserController.update)
routes.delete('/', UserController.delete)

module.exports = routes