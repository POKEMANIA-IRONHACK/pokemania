const { Schema, model } = require("mongoose");


const teamSchema = new Schema({
    name: String,
    team: Schema.Types.ObjectId
});

const Team = model("Team", teamSchema);

module.exports = Team;