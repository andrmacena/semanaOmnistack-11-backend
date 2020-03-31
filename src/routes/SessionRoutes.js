const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const controller = require('../controllers/SessionController')

routes.post('/session', celebrate({
   [Segments.BODY]: Joi.object().keys({
      id: Joi.string().required()
   })
}), controller.createSession)

module.exports = routes
