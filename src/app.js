const express = require('express')
const cors = require('cors')


const OngRoutes = require('./routes/OngRoutes')
const IncidentRoutes = require('./routes/IncidentRoutes')
const ProfileRoutes = require('./routes/ProfileRoutes')
const SessionRoutes = require('./routes/SessionRoutes')

const app = express()

app.use(cors({
   //origin: 'meufrontend.com.br'
}))
app.use(express.json())

app.use(OngRoutes)
app.use(IncidentRoutes)
app.use(ProfileRoutes)
app.use(SessionRoutes)

require('./database')

app.listen(3333)
