const config = require('../config')
const sendgrid = require('sendgrid')(config.sendgridKey)


module.exports = {
    async sendEmail(to, subject, body){
        await sendgrid.send({
            to: to,
            from: 'contato@bethehero.com',
            subject: subject,
            html: body
        })
    }
}
