const Incident = require('../models/Incident')
const Ong = require('../models/Ong')


module.exports = {
   async createIncident(req, res, next) {
      const { title, description, value } = req.body

      const ong_id = req.headers.authorization

      //desestruturação
      try {
         const data = await Incident.create({
            title,
            description,
            value,
            ong_id
         })

         return res.json({ id: data.id })

      } catch (error) {
         return res.json(error)

      }
   },
   async getIncidents(req, res, next) {
      const { page = 1 } = req.query

      const count = await Incident.count()

      const incidents = await Incident.findAll({
         offset: ((page - 1) * 5), limit: 5,
         attributes: ['id', 'title', 'description', 'value', 'ong_id'],
         include: [{
            attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
            association: 'ong'
         }]
      })

      res.header('X-Total-Count', count)
      res.json(incidents)
   },
   async deleteIncidents(req, res, next) {
      const { id } = req.params
      const ong_id = req.headers.authorization

      const incident = await Incident.findOne({ attributes: ['ong_id'] }, { where: { id } })

      if (incident.ong_id !== ong_id) {
         return res.status(401).json({ error: 'Access denied' })

      }

      await Incident.destroy({ where: { id } })

      return res.status(204).send()

   }
}