const Ong = require('../models/Ong')

module.exports = {
   async createSession(req, res, next) {
      const { id } = req.body

      const ong = await Ong.findByPk(id)

      if (!ong) {
         return res.status(400).json({ error: 'No ONG found' })
      }

      return res.json({ Name: ong.name })

   }
}