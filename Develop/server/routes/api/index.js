const router = require('express').Router();
const matchupRoutes = require('./matchup-routes');
const foodRoutes = require('./foodroutes.js');

router.use('/matchup', matchupRoutes);
router.use('/food', foodRoutes);

module.exports = router;
