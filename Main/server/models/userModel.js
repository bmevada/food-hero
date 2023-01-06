const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: { 
    type: String, 
    required: true, 
    unique: true 
  },
  password: { 
    type: String, 
    required: true, 
    minlength: 5 
  },
  role: {
    type: String, 
    enum: ['user', 'admin'],
    default: 'user'
  },
  displayName: { 
    type: String
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = User = mongoose.model("user", userSchema);
