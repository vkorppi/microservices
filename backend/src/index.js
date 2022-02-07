const express = require('express')
const http = require('http')
const app = require('./app')


const env = process.env;

const gateway = http.createServer(app)

// default port 3001

const PORT = process.argv[2]


gateway.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})