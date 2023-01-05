const { Schema, model } = require('mongoose');
const { Food } = require('.');

const techSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const Tech = model('Food', foodSchema);

module.exports = Food;
