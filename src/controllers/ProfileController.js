const Incident = require('../models/Incident')


module.exports = {
   async getSpecificIncidentOng(req, res, next) {
      const ong_id = req.headers.authorization

      const incidents = await Incident.findAll({ where: { ong_id } })

      res.json(incidents)

   }
}
