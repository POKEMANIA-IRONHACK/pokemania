// ℹ️ Gets access to environment variables/settings
// https://www.npmjs.com/package/dotenv
require("dotenv/config");

// ℹ️ Connects to the database
require("./db");

// Handles http requests (express is node js framework)
// https://www.npmjs.com/package/express
const express = require("express");

// Handles the handlebars
// https://www.npmjs.com/package/hbs
const hbs = require("hbs");

const app = express();

// ℹ️ This function is getting exported from the config folder. It runs most pieces of middleware
require("./config")(app);


// default value for title local
const projectName = "Pokemania";
const capitalized = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

app.locals.title = `${capitalized(projectName)} created with IronLauncher`;

// 👇 Start handling routes here
const index = require("./routes/index");
app.use("/", index);

const signup = require("./routes/auth");
app.use("/", signup);

const login = require("./routes/auth")
app.use("/", login)

const createUser = require("./routes/auth")
app.use("/", createUser)

// session configuration

const session = require('express-session');
const MongoStore = require('connect-mongo');
const DB_URL = process.env.MONGODB_URI

app.use(
	session({
		secret: process.env.SESSION_SECRET,
		// for how long is the user logged in -> this would be one day 	
		cookie: { maxAge: 1000 * 60 * 60 * 24 },
		resave: true,
		saveUninitialized: false,
		store: MongoStore.create({
			mongoUrl: DB_URL
		})
	})
)
// end of session configuration


// ❗ To handle errors. Routes that don't exist or errors that you handle in specific routes
require("./error-handling")(app);

module.exports = app;
