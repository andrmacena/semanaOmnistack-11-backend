require('dotenv').config()

const express = require('express')
const cors = require('cors')
const { errors } = require('celebrate')

const OngRoutes = require('./routes/OngRoutes')
const IncidentRoutes = require('./routes/IncidentRoutes')
const ProfileRoutes = require('./routes/ProfileRoutes')
const SessionRoutes = require('./routes/SessionRoutes')
const ReSendEmailRoutes = require('./routes/ReSendEmailRoutes')

const app = express()

app.use(cors())
app.use(express.json())

app.use(OngRoutes)
app.use(IncidentRoutes)
app.use(ProfileRoutes)
app.use(SessionRoutes)
app.use(ReSendEmailRoutes)

app.use(errors())

require('./database')

app.listen(process.env.PORT || 3333)
