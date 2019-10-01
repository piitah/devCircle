const express = require('express')
const router = express.Router()
const Controllers = require('../controllers/profileController')

router.post('/', Controllers.postProfile)
router.get('/', Controllers.getProfile)
router.get('/:id', Controllers.getProfileById)

module.exports = router