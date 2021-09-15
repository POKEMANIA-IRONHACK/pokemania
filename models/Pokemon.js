const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const pokemonSchema = new Schema({
  name: String,
  type: Array,
  abilities: Array,
  basestats: {
      hp: Number,
      att: Number,
      def: Number,
      satt: Number,
      sdef: Number,
      spe: Number
  }
});

const Pokemon = model("Pokemontest", pokemonSchema);

module.exports = Pokemon;
