'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
const port = process.env.PORT || 3000

const ProductCtrl = require('./controllers/products.js')

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/api/product', ProductCtrl.getProducts)

app.get('/api/product/:productId', ProductCtrl.getProduct)

app.post('/api/product', ProductCtrl.saveProduct)

app.put('/api/product/:productId', ProductCtrl.updateProduct)

app.delete('/api/product/:productId', ProductCtrl.deleteProduct)

mongoose.connect('mongodb://localhost:27017/shop', (err, res) => {
	if(err) {
		return `Conexion a la base de datos fallida ${err}`
	}
	console.log('Conexion a la base de datos establecida')

	app.listen(3000, () => {
		console.log(`API REST corriendo en http://localhost:${port}`)
	})
})


