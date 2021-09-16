const router = require("express").Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
const axios = require("axios");
const Pokemon = require("../models/Pokemon");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})


// GET TEST POKEMON FROM DB

router.get("/main", (req, res, next) => {
  Pokemon.find()
  .then(pokemonsFromDB => {
    console.log(pokemonsFromDB[0]);
    res.render('main', {pokemonList: pokemonsFromDB})
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