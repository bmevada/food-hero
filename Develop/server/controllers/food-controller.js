const { Food } = require('../models');

module.exports = {
  async getAllFood(req, res) {
    const allFood = await Food.find({});

    if (!allFood) {
      return res.status(400).json({ message: 'No food items found' });
    }
    res.status(200).json(allFood);
  },
};
