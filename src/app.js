const express = require('express')
const OngRoutes = require('./routes/OngRoutes')

const app = express()

app.use(express.json())

app.use(OngRoutes)

require('./database')

app.listen(3333)
