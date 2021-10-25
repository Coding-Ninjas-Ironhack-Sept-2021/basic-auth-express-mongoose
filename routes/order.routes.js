const router = require("express").Router();
const isAdmin = require("../middelware/isAdmin.middelware");

router.get("/orders", isAdmin, (req, res, next) => {
    console.log("he karina, I'm working on the order routes....")
    res.send("display list of orders (includes billing and sensitive information) ")
});


module.exports = router;
