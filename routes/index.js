const router = require("express").Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
const axios = require("axios");

//const pokeApi = new PokemonApi ({
//  // clientId: process.env.CLIENT_ID,
//  // clientSecret: process.env.CLIENT_SECRET
//});


/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})



router.get("/main", (req,res,next) => {
  axios
  .get('https://pokeapi.co/api/v2/pokemon/')
  .then((response) => {
  console.log(response.data)
  const name = response.data.results
  //console.log(name)
  res.render("main",{pokemon: name},);
  })
})



module.exports = router;
