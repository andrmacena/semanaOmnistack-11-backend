const crypto = require('crypto')

const Ong = require('../models/Ong')

module.exports = {

   async getOng(req, res, next) {
      const ongs = await Ong.findAll({ attributes: ['id', 'name', 'email', 'whatsapp', 'city', 'uf'] })

      return res.json(ongs)

   },
   async createOng(req, res, next) {
      const { name, email, whatsapp, city, uf } = req.body

      const id = crypto.randomBytes(4).toString('HEX')

      await Ong.create({ id, name, email, whatsapp, city, uf })

      return res.json(id)

   },
}
