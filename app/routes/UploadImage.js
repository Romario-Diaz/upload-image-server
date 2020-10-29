'use strict'

const router = require('express').Router()
const Image = require('../models/Image')
const storage = require('../config/multer')
const multer = require('multer')

const uploader = multer({storage})

router.post('/upload', uploader.single('file'), async(req, res) => {
    const { file, body } = req

    console.log("lo que nos esta llegando ; ", body.name)

    if(file && body) {
        const newImage = new Image({
            fileName : body.name,               // aqui tambien habia un error el name emppieza con mayuscula
            urlFile : `http://localhost:4000/${file.filename}`  // esto corregimos era 5000 el incorrecto
        })
        await newImage.save()
        res.json({
            newImage: newImage
        })
    }
})

router.get('/dowload', async(req, res) => {
    const images = await Image.find()
    res.json(images)
})

module.exports = router