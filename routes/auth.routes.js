const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/User.model");


router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});


router.post("/signup", (req, res, next) => {

    const { username, email, password } = req.body;

    // validation: check if user provides all mandatory fields
    if( !username || !email || !password ) {
        res.render("auth/signup", { errorMessage: "All fields are mandatory. Please provide your username, email and password."});
        return;
    }

    // validation: password strength
    const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
    if (!regex.test(password)) {
        res.render('auth/signup', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
        return;
    }

    bcryptjs
        .genSalt(saltRounds)
        .then( salt => {
            return bcryptjs.hash(password, salt)
        })
        .then( (digest) => {
            console.log(digest, "🦄");
            return User.create({
                username: username,
                email: email,
                passwordHash: digest
            })
        })
        .then( () => {
            res.redirect('/userProfile');
        })
        .catch( error => {
            if (error.code === 11000){
                res.render('auth/signup', { errorMessage: 'Username and email need to be unique. Either username or email is already used.' });
            } else {
                console.log("error creating user account", error);
                next(error);
            }
        });
});


router.get('/login', (req, res) => res.render('auth/login'));


router.post('/login', (req, res, next) => {
    const { email, password } = req.body;

    //validation
    if (email === '' || password === '') {
        res.render('auth/login', {
            errorMessage: 'Please enter both, email and password to login.'
        });
        return;
    }

    User.findOne({ email })
        .then(user => {
            if (!user) {
                res.render('auth/login', { errorMessage: 'Email is not registered. Try with other email.' });
                return;
            } else if (bcryptjs.compareSync(password, user.passwordHash)) {
                res.render('users/user-profile', { user });
            } else {
                res.render('auth/login', { errorMessage: 'Incorrect password.' });
            }
        })
        .catch(error => next(error));
});


router.get('/userProfile', (req, res) => res.render('users/user-profile'));


module.exports = router;
