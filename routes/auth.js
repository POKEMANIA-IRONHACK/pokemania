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
			res.redirect('/login');
			})
			.catch(err => next(err));
		}
	})

});




// create a middleware to check if the user is logged in
//  const loginCheck = () => {
//  	return (req, res, next) => {
//  	  // is there a logged in user?
//  	  if (req.session.user) {
//  		// if yes -> proceed as requested
//  		next();
//  	  } else {
//  		// if there is no logged in user -> redirect to login
//  		res.redirect('/login');
//  	  }
//  	}
//}


//   // this route is now protected -> can only be accessed by a logged in user
// router.get('/main', loginCheck(), (req, res, next) => {
// 	// we can access a cookie
// 	console.log('this is the cookie: ', req.cookies);
// 	// this is how we can set a cookie 
// 	res.cookie('myCookie', 'hello world');
// 	// this is how you can delete a cookie
// 	res.clearCookie('myCookie');
// 	// we retrieve the logged in user from the session
// 	const loggedInUser = req.session.user;
// 	console.log(loggedInUser);
// 	// and pass the user object into the view
// 	res.render('main', { user: loggedInUser });
//   });



// Login
router.get("/login", (req,res, next) => {
	res.render("login");
  })
router.post('/login',(req, res, next) => {
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
		console.log(userFromDB)
		req.session.user = userFromDB;
		res.redirect('/main');
	} else {
		// if the password is not matching -> show the form again 
		res.render('login', { message: 'not the right password' })
		}
	})
});  



// Logout
router.get('/logout', (req, res, next) => {
	console.log()
	// this logs the user out	
	req.session.destroy(err => {
		if (err) {
			next(err);
			// logout was successful -> we redirect
		} else {
			res.redirect('/');
		}
	})
});


// router.post('/main', (req, res, next) => {
// 	const pokemonId = req.params.id;
// 	const { name,type,imgUrl,base }= req.body
// 	User.findByIdAndUpdate(User._id, {
// 		title: titleFromInput,
// 		description: descriptionFromInput,
// 		author: authorFromInput,
// 		rating: ratingFromInput
// 	}, { new: true })
// 		.then(updatedBook => {
// 			console.log(updatedBook);
// 			// redirect to the details route
// 			res.redirect(`/books/${updatedBook._id}`);
// 		})
// 		.catch(err => {
// 			next(err);
// 		})
//});
module.exports = router;