const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const Ong = require('../models/Ong')
const Incident = require('../models/Incident')
const Image = require('../models/Image')

const connection = new Sequelize(dbConfig)

Ong.init(connection)
Incident.init(connection)
Image.init(connection)

Incident.associate(connection.models)
Image.associate(connection.models)

module.exports = connection
