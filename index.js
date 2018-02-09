'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')

mongoose.connect(config.db, (err, res) => {
	if(err) {
		return `Conexion a la base de datos fallida ${err}`
	}
	console.log('Conexion a la base de datos establecida')

	app.listen(config.port, () => {
		console.log(`API REST corriendo en http://localhost:${config.port}`)
	})
})
