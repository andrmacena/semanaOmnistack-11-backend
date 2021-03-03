const emailService = require('../services/emailService')
const Ong = require('../models/Ong')

module.exports = {
   async reSendEmail(req, res) {
      const { email } = req.body

      const ong = await Ong.findOne({ where: { email } })

      if (!ong) {
        return res.status(400).json({ message: 'Você ainda não possui cadastro' })

      }

      emailService.sendEmail(email, "Bem vindo ao Be The Hero!", global.EMAIL_TMPL.replace('{0}', ong.id))

      return res.status(200).json({ ong })

   }
}
