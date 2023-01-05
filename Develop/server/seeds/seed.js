const db = require('../config/connection');
const { Food } = require('../models');

const foodData = require('./foodData.json');

db.once('open', async () => {
  await Food.deleteMany({});

  const food = await Food.insertMany(foodData);

  console.log('Food menu seeded!');
  process.exit(0);
});
