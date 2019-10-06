const jwt = require('jsonwebtoken')
const config = require('../config/keys')

exports.auth = (req, res, next) => {
    const token = req.header('Authorization')

    if (!token) {
        return res.status(404).send({
            error: "Access Denied. No token provided"
        })
    }
    try {
        const decoded = jwt.verify(token, config.secret)
        req.user = decoded
        next()
    } catch (err) {
        res.status(400).send("Invalid Token")
    }
}