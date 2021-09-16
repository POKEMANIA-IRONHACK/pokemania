const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const teamSchema = new Schema({
  name: String,
  team: Array
  });

const Team = model("Teamtest", teamSchema);

module.exports = Team;
