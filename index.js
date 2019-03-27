const app = require('express')()
const consign = require('consign')
const _ = require('lodash')
const db = require('./config/db')

app._ = _
app.db = db

consign()
    .include('./config/middlewares.js')
    .include('./config/tables.js')
    .then('./helpers')
    .then('./controllers')
    .then('./models')
    .then('./config/routes.js')
    .into(app)

app.listen(3000, () => { console.log('-------------------------------') })

