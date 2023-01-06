const db = require('./connection');
const { User, Product, Category } = require('../models/modalModel');

db.once('open', async () => {
  await Category.deleteMany();


  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: 'Crunchy Asian Slaw',
      description:
        'Crunchy Asian Slaw made from Asian cabbage, brussel sprouts, broccoli and carrots. Seasoned with our special dressing and sesame seeds',
      image: 'asian-slaw.jpg',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Broccolli and Chicken Rice',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Chickpea Salad',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Creamy scrambled eggs',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Broccolli and Chicken Rice',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Honey Sesame chicken',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Broccolli and Chicken Rice',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Honey Sesame Chicken',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Jerk Chicken Pilaf',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Mince Sweetcorn Burrito',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Jerk Chicken',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Paneer Korma',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Buttered Paneer',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Broccolli and Chicken Rice',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
  ]);

  console.log('products seeded');

  await User.deleteMany();

  await User.create({
    firstName: 'Pamela',
    lastName: 'Washington',
    email: 'pamela@testmail.com',
    password: 'password12345',
    orders: [
      {
        products: [products[0]._id, products[0]._id, products[1]._id]
      }
    ]
  });

  await User.create({
    firstName: 'Elijah',
    lastName: 'Holt',
    email: 'eholt@testmail.com',
    password: 'password12345'
  });

  console.log('users seeded');

  process.exit();
});
