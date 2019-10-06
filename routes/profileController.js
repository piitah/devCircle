const express = require('express')
const router = express.Router()
const verify = require('../middleware/auth')
const Controllers = require('../controllers/profileController')

router.post('/', verify.auth, Controllers.postProfile)
router.get('/', Controllers.getProfile)
router.get('/:id', Controllers.getProfileById)
router.delete('/', verify.auth, Controllers.deleteProfile)

module.exports = router