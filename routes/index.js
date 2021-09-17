const User = require("../models/User.model");
const Pokemon = require("../models/Pokemon");
const router = require("express").Router();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})


router.get('/profile', (req, res, next) => {
  User.findById(req.session.user._id)
    .then(async user => {
      console.log(user)
      const pokemons = [];
      for (let id of user.teams) {
        const pokemon = await Pokemon.findById(id);

        pokemons.push(pokemon);
        console.log(pokemons);
      }
      res.render('profile', { user, pokemonlist: pokemons })
    })
    .catch(err => next(err));
})

router.post('/api/user', (req, res) => {
  User.findByIdAndUpdate(req.session.user._id, { teams: req.body.pickedIds })
    .then(user => console.log(user))
    .catch(err => next(err));
})

// GET TEST POKEMON FROM DB

router.get("/main", (req, res, next) => {
  Pokemon.find()
    .then(pokemonsFromDB => {
      console.log(pokemonsFromDB[0]);
      res.render('main', { pokemonList: pokemonsFromDB })
    })
})

// //Get API data
// const getPokemonNames = router.get("/main", (req,res,next) => {
//   axios
//   .get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1118')
//   .then((response) => {
//   const x = response.data.results
//   //console.log(response.data.results)
// // Display Pokemon names
//   res.render("main",{pokemon: x});
//   })
// })

// // get the images 
// const getPokemonPictures = router.get("/main", (req,res,next) => {
//   axios
//   .get('https://pokeapi.co/api/v2/pokemon/1/')
//   .then((response) => {
//   // const x = response.data.results
//   const pokeUrl = response.data.sprites.back_shiny
//   console.log(pokeUrl)
// // Display Pokemon names
//   res.render("main",{pokemonPics: pokeUrl});
//   })
// })




module.exports = router;