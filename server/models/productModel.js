const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
  },
  img: {
    type: String
  },
  description: { 
    type: String
  },
  price: {
    type: Number
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model("product", productSchema);