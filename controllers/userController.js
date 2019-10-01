const helper = require('../helpers/helper');

// user model schema
const UserModel = require('../models/user')

exports.SignUp = async (req, res) => {
    const isValid = UserModel.validate(req.body)

    if (isValid.error) {
        res.status(400).json({
            message: isValid.error.details[0].message
        })
    }

    const hashedPassword = await helper.hashPassword(req.body.password);
    await UserModel.User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                try {
                    const newUser = new UserModel.User({
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        email: req.body.email,
                        password: hashedPassword
                    })
                    newUser.save(function (err, user) {
                        if (err) {
                            res.status(400).send(err)
                        }
                        res.status(200).send({
                            status: user.email + "registered successfully"
                        })
                    })
                } catch (err) {
                    res.status(400).send({
                        error: err
                    })
                }

            }
            if (user) {
                res.status(400).send({
                    message: "user alredy exist"
                })
            }
        })
}
exports.loginIn = async (req, res) => {
    const isValid = UserModel.validateLogin(req.body)
    if (isValid.error) {
        return res.status(400).send(isValid.error.details[0].message)
    }

    await UserModel.User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                return res.status(400).send({
                    error: "User does not exist"
                })
            }
            if (user) {
                try {
                    if (!helper.comparePassword(user.password, req.body.password)) {
                        return res.status(400).send("Incorrect password")
                    }
                    const token = helper.generateToken(user.toJSON())

                    return res.status(200).send({
                        token: token,
                        user: user,
                        message: "login succesful"
                    })
                } catch (err) {
                    return res.status(400).send({
                        error: err + "errormsg"
                    })
                }
            }
        })
}
