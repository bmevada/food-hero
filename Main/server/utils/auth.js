const jwt = require("jsonwebtoken");

// Add encryption routes

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token").split(' ')[1];
    if (!token) return res.status(401).json({ msg: "No authentication token. Access denied." });

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.status(401).json({ msg: "Verification failed. Access denied." });

    req.user = verified.id;
    next();
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = auth;
