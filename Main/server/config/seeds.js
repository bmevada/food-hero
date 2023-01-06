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
        'Choice of brown rice or grain whte rice, chicken breast and broccoli florets with red peppers and soy sauce.',
      image: 'broccolli-pepper-chicken-rice.jpeg',
      price: 15.99,
      quantity: 500
    },
    {
      name: 'Chickpea Salad',
      description:
        'Chickpea Salad loaded with crisp cucumbers, juicy tomatoes, creamy avocado, feta cheese and chickpea',
      image: 'chickpea-salad.jpg',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Creamy scrambled eggs',
      description:
        'Creamy scrambled eggs with mushrooms and tomatoes',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Honey Sesame chicken',
      description:
        'Crispy baked chicken smothered in a sweet thick honey sesame sauce. A popular dish at Chinese restaurants.',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Jerk Chicken Pilaf',
      description:
        'Jerk Chicken With Rice And Peas Pilaf Recipe is a Caribbean dish made with roasted chicken on rice pilaf. Chicken is oven roasted with spices. The mildly spiced rice pilaf is made with peas and then the jerk chicken is served placed on top of the rice pilaf, with a dash of lemon juice on top.',
      image: '',
      price: 17.99,
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
      name: 'Plant Based Buttered Paneer',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Salad Feta',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Vegan Satay Sweet Potato Curry',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Thai Red Rice',
      description:
        '',
      image: '',
      price: 10.99,
      quantity: 500
    },
    {
      name: 'Tofu Veg Rice',
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
