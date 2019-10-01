const express = require('express')
const mongoose = require('mongoose')
const cors = require("cors")
const bodyParser = require("body-parser")
const path = require('path')
const passport = require('passport')
const dotenv = require('dotenv')

// routes
const UserLoginIn = require('../routes/userLoginController')
const UserSignUp = require('../routes/userSignUpController')
const Education = require('../routes/educationController')
const Experience = require('../routes/experienceController')
const Profile = require('../routes/profileController')

// 
const app = express()

dotenv.config()

// use all middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(passport.initialize())

// setting headers for all route
app.all('*', (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
})

// use all routes
app.use('/loginIn', UserLoginIn)
app.use('/signUp', UserSignUp)
app.use('/education', Education)
app.use('/experience', Experience)
app.use('/Profile', Profile)

// connecting to mongodb cluster
const db = require('../config/keys').mongoURI
mongoose.connect(db, { useNewUrlParser: true })
    .then(() => {
        console.log('mongodb connected')
    }).
    catch((err) => {
        console.log('error connecting to mongodb cluster' + err)
    })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('../client/dist'))

    app.get('*', (req, res, next) => {
        res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
    })
}

// port
const port = process.env.PORT || 3030

app.listen(port, () => {
    console.log('listening to port 3030')
})