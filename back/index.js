const express = require('express')
const cors = require('cors')

const app = express()

//Configs
app.use(express.json())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))

//Routes
const TaskRoutes = require('./routes/TaskRoutes')
app.use('/tasks', TaskRoutes)

//Port
app.listen(5000)