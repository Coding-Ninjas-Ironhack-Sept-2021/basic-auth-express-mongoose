const router = require("express").Router();
const isAdmin = require("../middelware/isAdmin.middelware");

router.get("/orders", isAdmin, (req, res, next) => {
    res.send("display list of orders (includes billing and sensitive information) ")
});


module.exports = router;
