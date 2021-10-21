const router = require("express").Router();


router.get("/signup", (req, res, next) => {
    res.render("auth/signup");
});


module.exports = router;
