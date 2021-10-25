const router = require("express").Router();

// Here I'm testing teamwork on github!
// editing routes file

router.get("/products", (req, res, next) => {
    console.log("hi luis from the other side")
    res.send("display list of products...")
});

router.get("/products/create", (req, res, next) => {
    res.send("display form to create a new product")
});

router.post("/products/create", (req, res, next) => {
    res.send("create new product")
});

module.exports = router;
