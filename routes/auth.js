const router = require("express").Router();
const User= require("../models/User.model")


/* GET home page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});


router.get("/login", (req,res, next) => {
  res.render("login");
})

// signing up a new user into the db ✅
// username cannot be empty ✅
// password hash

router.post("/signup", (req, res, next) => {
	console.log(req.body);
	const { username, password } = req.body;
	if (password.length < 4) {
		// if not show the signup form again with a message
		res.render('signup', { message: 'Your password needs to be 4 chars min' });
		return;
	}
	// is the username empty
	if (username.length === 0) {
		res.render('signup', { message: 'Username cannot be empty' });
		return;
	}
	User.findOne({ username: username })
	.then(userFromDB => {
		// if user exists 
		if (userFromDB !== null) {
			// we render signup again
			res.render('signup', { message: 'Username is already taken' });
		} else {
			// // if we reach this line the username can be used
			// // password as the value for the password field
			// const salt = bcrypt.genSaltSync();
			// const hash = bcrypt.hashSync(password, salt);
			// console.log(hash);
			// // we create a document for that user in the db with the hashed 
			// User.create({ username: username, password: hash })
			// 	.then(createdUser => {
			// 		console.log(createdUser);
			// 		res.redirect('/');
			// 	})
			// 	.catch(err => {
			// 		next(err);
			// 	})
		}// 
	})
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




