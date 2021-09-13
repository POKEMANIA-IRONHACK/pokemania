const router = require("express").Router();

/* GET home page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

module.exports = router;