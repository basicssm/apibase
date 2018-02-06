'use strict'

const express = require('express')
const bodyParser = require('body-parser')


const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/hola', (req, res) => {
	let message = `Hola Mundo!`
	res.send({ message:  message})
	console.log('peticion hola')
	// res.end(); //Si no queremos que devuelva nada
})

app.get('/hola/:name', (req, res) => {
	let message = `Hola ${req.params.name}!`
	res.send({ message:  message})
	console.log('peticion hola')
	// res.end(); //Si no queremos que devuelva nada
})



app.listen(3000, () => {
	console.log(`API REST corriendo en http://localhost:${port}`)
})