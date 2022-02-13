

const router = require('express').Router()

router.get('/microservice1/', async (req, res) => {

  // readToken
  // createToken

  res.status(200).json('{"name":"microservice1 called"}')
})

router.get('/microservice2/', async (req, res) => {

  
  // readToken
  // createToken

  res.status(200).json('{"name":"microservice12 called"}')
})

router.get('/microservice3/', async (req, res) => {

  
  // readToken
  // createToken

  res.status(200).json('{"name":"microservice3 called"}')
})

router.get('/microservice4/', async (req, res) => {

  
  // readToken
  // createToken

  res.status(200).json('{"name":"microservice4 called"}')
})

router.get('/microservice5/', async (req, res) => {

  
  // readToken
  // createToken

  res.status(200).json('{"name":"microservice5 called"}')
})




module.exports = router