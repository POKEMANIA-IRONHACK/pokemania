const router = require("express").Router();
const User= require("../models/User.model")
const bcrypt = require('bcrypt');


/* GET home page */
router.get("/signup", (req, res, next) => {
  res.render("signup");
});

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
		const salt = bcrypt.genSaltSync();
		const hash = bcrypt.hashSync(password, salt);
			User.create ({
				username: username,
				password: hash
			})
			.then(createdUser => {
			console.log(createdUser);
			res.redirect('/main');
			})
			.catch(err => next(err));
		}
	})

});

// Login
router.get("/login", (req,res, next) => {
	res.render("login");
  })
router.post('/login', (req, res, next) => {
const { username, password } = req.body;
// check if we have a user with that username in the database
User.findOne({ username: username })
	.then(userFromDB => {
	if (userFromDB === null) {
	// if not -> the username is not correct -> show login again
	res.render('login', { message: 'not the right username' })
	}
	// username is correct
	// we check the password from the input against the hash in the database
	// compareSync() returns true or false 
	if (bcrypt.compareSync(password, userFromDB.password)) {
		// if it matches -> all credentials are correct
		// we log the user in
		//req.session.user = userFromDB;
		res.redirect('/main');
	} else {
		// if the password is not matching -> show the form again 
		res.render('login', { message: 'not the right password' })
		}
	})
});  
  

module.exports = router;




