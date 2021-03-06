const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const joi = require('joi')

// Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema)

const validate = (user) => {
    const validateSchema = {
        name: joi.string().required(),
        email: joi.string().max(255).required().email(),
        password: joi.string().min(5).max(1024).required()
    }

    return joi.validate(user, validateSchema)
}

const validateLogin = (user) => {
    const validateSchema = {
        email: joi.string().min(5).max(255).required().email(),
        password: joi.string().min(5).max(1024).required()
    }

    return joi.validate(user, validateSchema)
}

module.exports = {
    User: User,
    validate: validate,
    validateLogin: validateLogin
}