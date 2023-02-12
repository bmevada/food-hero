const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../utils/auth");
const User = require("../models/userModel");

//User Sign up Page - added here

router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;
    if (!email || !password || !passwordCheck) return res.status(400).json({ msg: "Please complete all fields." });
    if (password.length < 5) return res.status(400).json({ msg: "The password msut be at least 5 characters long." });
    if (password !== passwordCheck) return res.status(400).json({ msg: "Re-enter password." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser) return res.status(400).json({ msg: "An account with this email already exists. Please login." });

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);
    
    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// User login page

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Please complete all fields." });

    // If user does not exist
    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "No account with this email exists. Please sign up" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Incorrect password" });

    const token = jwt.sign({ id: user._id, name: user.displayName, role: user.role }, process.env.JWT_SECRET);
    return res.json({token});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Find and delete user by ID
router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Find a user by ID
router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", auth, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

module.exports = router;
