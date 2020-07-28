const express = require('express')
const routes = express.Router()
const HomeController = require("../app/controller/HomeController")

const products = require('./products')
const users = require('./users')

routes.use('/users', users)
routes.use('/products', products)

// HOME
routes.get('/', HomeController.index)

// ALIAS
routes.get('/ads/create', function(req, res) {
  return res.render("/products/create.njk")
})

routes.get('/accounts', function(req, res) {
	return res.redirect("/users/login")
})

module.exports = routes