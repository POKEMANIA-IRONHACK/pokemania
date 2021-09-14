// const router = require("express").Router();
// const { render } = require("../app");
// const Pokemon = require('../models/Pokemon');

// router.get('/pokemons', (req, res, next) => {
// 	// get all the pokemons from the db
// 	Pokemon.find()
// 		.then(pokemonsFromDB => {
//             const x = 
// 			console.log(pokemonsFromDB);
// 			// console.log('this is the pokemons route');
// 			res.render('main', { pokemonList: pokemonsFromDB });
// 		})
// 		.catch(err => {
// 			// instead of console logging the error we now pass it to the 
// 			// error handler via next()
// 			next(err);
// 		})
// })

// module.exports = router;