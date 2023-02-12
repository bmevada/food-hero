// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/food-hero', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// module.exports = mongoose.connection;

// REMOVE ALL FROM BELOW


// const jwt = require("jsonwebtoken");

// const auth = (req, res, next) => {
//   try {
//     const token = req.header("x-auth-token").split(' ')[1];
//     if (!token) return res.status(401).json({ msg: "No authentication token, authorization denied." });

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verified) return res.status(401).json({ msg: "Token verification failed, authorization denied." });

//     req.user = verified.id;
//     next();
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = auth;
