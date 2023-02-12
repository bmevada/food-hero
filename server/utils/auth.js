const jwt = require("jsonwebtoken");

// Add encryption - Once the user is logged in, each subsequent request will include the JWT, allowing the user to access routes, services, and resources that are permitted with that token.

// A user should be able to sign up or log in to their account and receive a JSON Web Token with a two-hour expiration.

// const auth = (req, res, next) => {
//   try {
//     const token = req.header("x-auth-token").split(' ')[1];
//     if (!token) return res.status(401).json({ msg: "No authentication token. Access denied." });

//     const verified = jwt.verify(token, process.env.JWT_SECRET);
//     if (!verified) return res.status(401).json({ msg: "Verification failed. Access denied." });

//     req.user = verified.id;
//     next();
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

// module.exports = auth;

// set token secret and expiration date
const secret = 'mysecretsshhhhh';
const expiration = '2h';

module.exports = {
  // function for our authenticated routes
  // authMiddleware: function (req, res, next) {
  authMiddleware: function ({req}) {
    // allows token to be sent via  req.query or headers
    let token = req.query.token || req.headers.authorization;

    // ["Bearer", "<tokenvalue>"]
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    if (!token) {
      return req;
      // return res.status(400).json({ message: 'You have no token!' });
    }

    // verify token and get user data out of it
    try {
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.log('Invalid token');
      // return res.status(400).json({ message: 'invalid token!' });
      return req;
    }

    // send to next endpoint
    // next();
  },
  signToken: function ({ username, email, _id }) {
    const payload = { username, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};