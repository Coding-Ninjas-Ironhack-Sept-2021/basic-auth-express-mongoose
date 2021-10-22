const router = require("express").Router();


router.get("/products", (req, res, next) => {
    res.send("display list of products")
});

router.get("/products/create", (req, res, next) => {
    res.send("display form to create a new product")
});

router.post("/products/create", (req, res, next) => {
    res.send("create new product")
});

module.exports = router;
