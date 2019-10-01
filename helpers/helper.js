const jwt = require('jsonwebtoken')
const config = require('../config/keys')
const bcrypt = require('bcryptjs')

const helper = {
    hashPassword: (password) => {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(12))
    },
    comparePassword: (hashPassword, password) => {
        return bcrypt.compareSync(password, hashPassword)
    },
    generateToken: (payload) => {
        const token = jwt.sign(payload, config.secret, { expiresIn: '10d' })
        return token;
    }
}

module.exports = helper