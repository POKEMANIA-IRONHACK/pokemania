const { Schema, model, SchemaTypes } = require("mongoose");
const Pokemon = require('../models/Pokemon');
// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema({
  username: {
    type: String,
    // unique: true -> Ideally, should be unique, but its up to you
  },
  password: String,
  teams: [{
    type: Schema.Types.ObjectId,
    ref: 'Pokemon'
  }]
});

const User = model("User", userSchema);

module.exports = User;
