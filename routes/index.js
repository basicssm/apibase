'use strict'

const express = require('express')
const api = express.Router()
const ProductCtrl = require('../controllers/products.js')

api.get('/product', ProductCtrl.getProducts)

api.get('/product/:productId', ProductCtrl.getProduct)

api.post('/product', ProductCtrl.saveProduct)

api.put('/product/:productId', ProductCtrl.updateProduct)

api.delete('/product/:productId', ProductCtrl.deleteProduct)

module.exports = api
