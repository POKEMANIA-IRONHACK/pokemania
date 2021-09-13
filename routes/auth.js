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
	// create a new book in the database
	User.create ({
		username: username,
    password: password
	})
		.then(createdUser => {
			console.log(createdUser);
			// redirect / render the detail view for this book
			// res.render('bookDetails', { book: createdBook });
			// redirect to a specific url
			res.redirect('/main');
		})
		.catch(err => next(err));
});

module.exports = router;