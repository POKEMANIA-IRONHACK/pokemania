const { Schema, model } = require("mongoose");


const teamSchema = new Schema({
    name: String,
    team: Array,
});

const Team = model("Team", teamSchema);

module.exports = Team;