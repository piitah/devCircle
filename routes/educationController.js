const express = require('express')
const router = express.Router()
const Controllers = require('../controllers/profileController')

router.post('/:id', Controllers.Education)

module.exports = router