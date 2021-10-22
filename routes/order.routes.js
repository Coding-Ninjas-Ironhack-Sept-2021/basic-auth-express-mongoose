const router = require("express").Router();


router.get("/orders", (req, res, next) => {
    res.send("display list of orders (includes billing and sensitive information) ")
});


module.exports = router;
