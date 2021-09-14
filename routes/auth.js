const router = require("express").Router();
const User= require("../models/User.model")


/* GET home page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});


router.get("/login", (req,res, next) => {
  res.render("login");
})


router.post("/signup", (req, res, next) => {
	console.log(req.body);
	const { username, password } = req.body;
	User.create ({
		username: username,
    password: password
	})
		.then(createdUser => {
			console.log(createdUser);
			res.redirect('/main');
		})
		.catch(err => next(err));
});

module.exports = router;