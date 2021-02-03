const crypto = require('crypto')

const Ong = require('../models/Ong')

const emailService = require('../services/emailService')

module.exports = {

   async getOng(req, res, next) {
      const ongs = await Ong.findAll({ attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'] })

      return res.json(ongs)

   },
   async createOng(req, res, next) {
      const { name, email, whatsapp, city, uf } = req.body

      const id = crypto.randomBytes(4).toString('HEX')

      try {

         await Ong.create({ id, name, email, whatsapp, city, uf })

         emailService.sendEmail(email, "Bem vindo ao Be The Hero!", global.EMAIL_TMPL.replace('{0}', id))

         return res.json(id)

      } catch (error) {

         res.send({ message: error })

      }
   }
}
