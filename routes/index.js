const router = require("express").Router();
const Pokedex = require('pokedex-promise-v2');
const P = new Pokedex();
const axios = require("axios");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index")
})


// Get API data
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




  const x = response.data.results
  console.log(response.data.results)
// Display Pokemon names
  res.render("main",{pokemon: x});
  })
})


module.exports = router;
