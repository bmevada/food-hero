const { Schema, model } = require('mongoose');

const matchupSchema = new Schema({
  food1: {
    type: String,
    required: true,
  },
  food2: {
    type: String,
    required: true,
  },
  food1_votes: {
    type: Number,
    default: 0,
  },
  food2_votes: {
    type: Number,
    default: 0,
  },
});

const Matchup = model('Matchup', matchupSchema);

module.exports = Matchup;
