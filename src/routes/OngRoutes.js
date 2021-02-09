const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const controller = require('../controllers/OngController')
const controllerImage = require('../controllers/ImageController')

routes.get('/ongs', controller.getOng)

routes.post('/ongs', celebrate({
   [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string().required().email(),
      whatsapp: Joi.string().required().min(10).max(11),
      city: Joi.string().required(),
      uf: Joi.string().required().length(2),
      about_me: Joi.string()
   })
}), controller.createOng)

routes.post('/ongs/addImage', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
   }).unknown(),
   [Segments.BODY]: Joi.object().keys({
      url_image: Joi.string().required(),
      description: Joi.string().required()
   })
}),

   controllerImage.createImage)
routes.get('/ongs/images', controllerImage.getImages)

module.exports = routes
