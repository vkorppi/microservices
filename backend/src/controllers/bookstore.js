

const router = require('express').Router()

router.get('/microservice1/', async (req, res) => {

  res.status(200).json("microservice1 called")
})

router.get('/microservice2/', async (req, res) => {

  res.status(200).json("microservice2 called")
})

router.get('/microservice3/', async (req, res) => {

  res.status(200).json("microservice3 called")
})

router.get('/microservice4/', async (req, res) => {

  res.status(200).json("microservice4 called")
})

router.get('/microservice5/', async (req, res) => {

  res.status(200).json("microservice5 called")
})




module.exports = router