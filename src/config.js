global.EMAIL_TMPL = 'Olá, seja bem vindo(a) ao Be the hero, esse é seu id de acesso <strong>{0}</strong>. Para acessar vá para <a href="https://bethehero-andrmacena.netlify.app/">Be The Hero</a>'

module.exports = {
    sendgridKey: process.env.SENDGRID_KEY,
    containerConnectionString: process.env.AZURE_CONTAINER
}
