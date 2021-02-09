const azureStorage = require('azure-storage')
const Guid = require('guid')
const configAzure = require('../config')

const Image = require('../models/Image')

module.exports = {

   async createImage(req, res, next) {

      const { url_image, description } = req.body

      const ong_id = req.headers.authorization

      try {
         if (url_image) {

            const blobService = azureStorage.createBlobService(configAzure.containerConnectionString)

            let filename = Guid.raw().toString() + '.jpg'
            let rawdata = url_image
            let matches = rawdata.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/)
            let type = matches[1]
            let buffer = new Buffer(matches[2], 'base64')

            blobService.createAppendBlobFromText('bethehero', filename, buffer, { contentType: type },
               function (error, result, response) {
                  if (error) {
                     filename = 'default-aboutMeProfile.png'
                  }
               })

            await Image.create({
               url_image: 'https://bethehero.blob.core.windows.net/bethehero/' + filename,
               description,
               ong_id
            })

            return res.status(201).send({ message: 'Imagem adicionada com sucesso!' })
         }

      } catch (error) {
         return res.status(500).send({ message: 'Falha ao processar a requisição ' + error })

      }

   },
   async getImages(req, res, next) {
      const { page = 1 } = req.query
      const ong_id = req.headers.authorization

      console.log(ong_id)

      const count = await Image.count()

      const images = await Image.findAll({
         offset: ((page - 1) * 5), limit: 5,
         attributes: ['id', 'url_image', 'description', 'ong_id'],
         include: [{
            attributes: ['name', 'email', 'whatsapp', 'city', 'uf'],
            association: 'ong',
            where: { id: ong_id }
         }]
      })

      res.header('X-Total-Count', count)
      res.json(images)
   }
}
