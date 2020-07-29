const express = require('express')
const routes = express.Router()
const multer = require('../app/middlewares/multer')
const ProductController = require("../app/controller/ProductController")
const SearchController = require("../app/controller/SearchController")

const { onlyUsers } = require("../app/middlewares/session")

// SEARCH
routes.get('/search', SearchController.index)

// PRODUCTS
routes.get('/create', onlyUsers, ProductController.create)
routes.get('/:id', ProductController.show)
routes.get('/:id/edit', ProductController.edit)

routes.post('/', multer.array("photos", 6), ProductController.post)
routes.put('/',multer.array("photos", 6), ProductController.put)
routes.delete('/', ProductController.delete)

module.exports = routes