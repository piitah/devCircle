const express = require('express')
const router = express.Router()
const verify = require('../middleware/auth')
const Controllers = require('../controllers/profileController')

router.post('/:id', Controllers.Education)
router.delete('/:id', verify.auth, Controllers.deleteEducationById)

module.exports = router