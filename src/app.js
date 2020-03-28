require('dotenv').config()

const express = require('express')
const cors = require('cors')

const OngRoutes = require('./routes/OngRoutes')
const IncidentRoutes = require('./routes/IncidentRoutes')
const ProfileRoutes = require('./routes/ProfileRoutes')
const SessionRoutes = require('./routes/SessionRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use(OngRoutes)
app.use(IncidentRoutes)
app.use(ProfileRoutes)
app.use(SessionRoutes)

require('./database')

app.listen(process.env.PORT || 3333)
