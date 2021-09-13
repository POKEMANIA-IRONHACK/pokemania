const router = require("express").Router();

/* GET home page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});


router.get("/login", (req,res, next) => {
  res.render("login");
})

module.exports = router;