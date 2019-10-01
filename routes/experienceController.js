const express = require('express')
const router = express.Router()
const Controllers = require('../controllers/profileController')

router.post('/:id', Controllers.Experience)

module.exports = router