const { ObjectId } = require("mongoose");
const mongoose = require("mongoose");

const modalSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true, 
    unique: true 
  },
  price: { 
    type: Number, 
    required: true, 
  },
  menuId: { 
    type: ObjectId, 
    required: true, 
  },
});

module.exports = Modal = mongoose.model("modal", modalSchema);