'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Image = new Schema({
    fileName: {type: String},
    urlFile: {type: String},
    dataUpload: {type: Date, default: Date.now()}
})

module.exports = mongoose.model('Image', Image)