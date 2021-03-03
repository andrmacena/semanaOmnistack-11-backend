const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const controller = require('../controllers/ReSendEmailController')

routes.post('/resend',celebrate({
   [Segments.BODY]: Joi.object().keys({
      email: Joi.string().required().email(),
   })
}), controller.reSendEmail)

module.exports = routes
