const mongoose = require("mongoose");
const User = require('./userModel');
const Product = require('./productModel');

const cartSchema = new mongoose.Schema({
    _id: false,
    userId: {
        type: mongoose.ObjectId,
        ref: User
    },
    orderItems: [{
        productId: {
            type: mongoose.ObjectId,
            ref: Product
        },
        count: {
            type: Number
        }
    }],
});

module.exports = User = mongoose.model("cart", cartSchema);
