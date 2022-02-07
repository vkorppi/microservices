
const express = require('express')
const app = express()
const bookstoreRouting = require('./controllers/bookstore')


app.use('/bookstore', bookstoreRouting)


module.exports = app