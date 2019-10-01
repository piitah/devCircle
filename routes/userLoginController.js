const express = require('express')
const router = express.Router()
const Controllers = require('../controllers/userController')

router.post('/', Controllers.loginIn)

module.exports = router