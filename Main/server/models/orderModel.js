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
    address: {
        type: String
    },
    phone: {
        type: String
    },
    extra: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = Order = mongoose.model("order", orderSchema);
