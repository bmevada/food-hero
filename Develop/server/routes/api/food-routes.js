const router = require('express').Router();
const { getAllFood } = require('../../controllers/food-controller');

router.route('/').get(getAllFood);

module.exports = router;
