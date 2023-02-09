// const db = require('./connection');
// const { User, Product, Category } = require('../models/modalModel');

// db.once('open', async () => {


//   await Product.deleteMany();

//   const products = await Product.insertMany([
//     {
//       name: 'Crunchy Asian Slaw',
//       description:
//         'Crunchy Asian Slaw made from Asian cabbage, brussel sprouts, broccoli and carrots. Seasoned with our special dressing and sesame seeds',
//       image: 'asian-slaw.jpg',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Broccolli and Chicken Rice',
//       description:
//         'Choice of brown rice or grain whte rice, chicken breast and broccoli florets with red peppers and soy sauce.',
//       image: 'broccolli-pepper-chicken-rice.jpeg',
//       price: 15.99,
//       quantity: 500
//     },
//     {
//       name: 'Chickpea Salad',
//       description:
//         'Chickpea Salad loaded with crisp cucumbers, juicy tomatoes, creamy avocado, feta cheese and chickpea',
//       image: 'chickpea-salad.jpg',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Creamy scrambled eggs',
//       description:
//         'Creamy scrambled eggs with mushrooms and tomatoes',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Honey Sesame chicken',
//       description:
//         'Crispy baked chicken smothered in a sweet thick honey sesame sauce. A popular dish at Chinese restaurants.',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Jerk Chicken Pilaf',
//       description:
//         'Jerk Chicken With Rice And Peas Pilaf Recipe is a Caribbean dish made with roasted chicken on rice pilaf. Chicken is oven roasted with spices. The mildly spiced rice pilaf is made with peas and then the jerk chicken is served placed on top of the rice pilaf, with a dash of lemon juice on top.',
//       image: '',
//       price: 17.99,
//       quantity: 500
//     },
//     {
//       name: 'Mince Sweetcorn Burrito',
//       description:
//         '',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Jerk Chicken',
//       description:
//         '',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Paneer Korma',
//       description:
//         '',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Buttered Paneer',
//       description:
//         'Is butter paneer good for you? It could be considered as the best alternative to meat for a protein-rich diet.',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Salad Feta',
//       description:
//         'These salads use feta cheese, which adds a salty, tangy and creamy flavor that pairs well with ingredients like cucumbers, watermelon and other ...',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Vegan Satay Sweet Potato Curry',
//       description:
//         'Cook this tasty vegan curry for an easy family dinner. With spinach and sweet potato, it boasts two of your five-a-day and it's under 400 calories.',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Thai Red Rice',
//       description:
//         'Thai red rice or known as cargo rice. The color is reddish with a tinge of brown',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//     {
//       name: 'Tofu Veg Rice',
//       description:
//         'This vegan fried rice with scrambled tofu is a healthy take on fried rice that is loaded with veggies, edamame beans, and scrambled tofu!',
//       image: '',
//       price: 10.99,
//       quantity: 500
//     },
//   ]);

//   console.log('products seeded');

//   await User.deleteMany();

//   await User.create({
//     firstName: 'Pamela',
//     lastName: 'Washington',
//     email: 'pamela@testmail.com',
//     password: 'password12345',
//     orders: [
//       {
//         products: [products[0]._id, products[0]._id, products[1]._id]
//       }
//     ]
//   });

//   await User.create({
//     firstName: 'Elijah',
//     lastName: 'Holt',
//     email: 'eholt@testmail.com',
//     password: 'password12345'
//   });

//   console.log('users seeded');

//   process.exit();
// });
