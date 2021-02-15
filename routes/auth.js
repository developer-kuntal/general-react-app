const router = require('express').Router();
const User = require('../src/models/UserModel');
// const MongoClient = require('mongodb').MongoClient;
const dotenv = require("dotenv");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../src/modules/validation');

dotenv.config();
// Connection URL
// const url = process.env.DB_CONNECT_CLOUD;

// Database Name
// const dbName = 'usercredential';

// Use connect method to connect to the server

router.post('/register', async (req, res) => {
    
    const {error} = registerValidation(req.body);
    // console.log(error);
    if(error && error.details[0].message[1] !== '$') return res.status(400).send(error.details[0].message);
    // res.send(error.details[0].message);

    // Checking if the user is already in the database 
    const emaiExist = await User.findOne({email: req.body.email});
    if(emaiExist) return res.status(400).send('Email already exists');

    // res.send(validation);

    // Hash password\
    const salt = bcrypt.genSaltSync(10);
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, salt);
    try {
        const user = new User({
            name,
            email,
            password : hashedPassword
        });
        const savedUser = await user.save();
        res.send({user: savedUser._id});
    } catch(err) {
        res.status(400).send(err);
    }
    
    
});

// LOGIN
router.post('/login', async (req, res) => {

    const {error} = loginValidation(req.body);
    console.log(error);
    if(error && error.details[0].message[1] !== '$') return res.status(400).send(error.details[0].message);
    // Checking if the email is already in the database 
    const user = await User.findOne({email: req.body.email});
    if(!user) return res.status(400).send('Email is wrong'); 
    // PASSWORD CORRECTION  CHECKING
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if(!validPass) return res.status(400).send('Invalid password');


    // Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('auth-token', token).send(token);

    // res.send('Logged In!');
});

module.exports = router;