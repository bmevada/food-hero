const mongoose = require("mongoose");
const User = require('./userModel');
const Product = require('./productModel');

const orderSchema = new mongoose.Schema({
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
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = User = mongoose.model("orders", orderSchema);
