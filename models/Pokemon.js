const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const pokemonSchema = new Schema({
  name: Object,
  type: Array,
  imgUrl: String,
  base: {
    HP: Number,
    Attack: Number,
    Defense: Number,
    SpecialAttack: Number,
    SpecialDefense: Number,
    Speed: Number
  }
});

const Pokemon = model("Pokemontest", pokemonSchema);

module.exports = Pokemon;
