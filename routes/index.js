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
  .get('https://pokeapi.co/api/v2/pokemon')
  .then((response) => {
  const x = response.data.results
  console.log(response.data.results)
  res.render("main",{pokemon: x});
  })
})










//.then((response) => {
//console.log(response.data.results);
//res.render("/index", response.data)
//}, (error) => {
//  console.log(error);
//});



//   method:'Get',
//   url:"https://pokeapi.co/api/v2",
// })
// .then((response) => {
// console.log(response);
// }, (error) => {
//   console.log(error);
// });
  


// router.get("/", (req, res, next) => {
//   const pokemon = req.params.pokemon;
//   //console.log(pokemon)
//   P
// .getPokemonByName('eevee')
// .then((data) => { console.log("The received data from the API: ", data)})
// res.render("index", data);
// });




//router.get("index", (req,res, next) => {
//  const pokemon = req.params.pokemon;
//  console.log(pokemon)
//P
//.getPokemonByName('eevee')
//.then((data) => { console.log("The received data from the API: ", data)})
//res.render("index", { data });
//})

module.exports = router;
