const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const saltRounds = 10;
const User = require("../models/User.model");


router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});


router.post("/signup", (req, res, next) => {

    const { username, email, password } = req.body;

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
        .catch( errorMsg => {
            console.log("error creating user account", errorMsg);
            next(errorMsg);
        });
});


router.get('/userProfile', (req, res) => res.render('users/user-profile'));


module.exports = router;
