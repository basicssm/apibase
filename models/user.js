'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt-nodejs')

const UserSchema = Schema({
	name: String

})

module.exports = mongoose.model('User', UserSchema)
