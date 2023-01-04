const router = require('express').Router();
const { User, Product, OrderItem } = require('../models');
const Cart = require('../models/cart');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const allProducts = await Product.findAll();
    const products = allProducts.map(product => product.get({ plain: true }));
    res.render('homepage', { logged_in: req.session.logged_in, products, cart: req.session.cart, style: "storefront.css" });


  } catch (err) {
    res.status(400).json(err);
  }
});


router.get('/product/:id', withAuth, async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);

    if (!productData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }
    // res.status(200).json(productData);
    console.log(productData);
    res.render('product', productData.dataValues);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/add-to-cart/:id', withAuth, async (req, res) => {
  var cart = new Cart(req.session.cart ? req.session.cart : {});
  console.log("printing the cart");
  console.log(cart);
  try {
    const productData = await Product.findByPk(req.params.id);

    if (!productData) {
      res.status(404).json({ message: 'No Product found with this id!' });
      return;
    }
    cart.add(productData.dataValues, productData.dataValues.id);
    req.session.cart = cart;
    console.log(req.session.cart);
    res.redirect('/');
  } catch (err) {
    res.status(500).json(err);
  }
});

// actual cart
router.get('/cart', withAuth, async (req, res) => {
  try {

    if (!req.session.cart) {
      res.status(404).json({ message: 'Cart does not exists' });
      return;
    }
    var cart = new Cart(req.session.cart);
    res.render('cart', { products: cart.generateArray(), totalPrice: cart.totalPrice });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/checkout', withAuth, async (req, res) => {

  if (!req.session.cart) {
    return res.redirect('/cart');
  }


  // EMAIL SERVICE
  const EmailService = require('../utils/emailService');
  const emailService = new EmailService();
  emailService.email.to = 'food.hero.mevada@gmail.com';
//   Password: Bootcamp@1
  // emailService.email.subject = "Your order has been placed"
  // emailService.email.html = "Thank you for your order"
  emailService.sendEmailOrderComplete(emailService.email.to);

  var cart = new Cart(req.session.cart);
  res.render('checkout', { totalPrice: cart.totalPrice });


});
router.get('/checkout', async (req, res) => {


});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [{ model: OrderItem }],
    });

    const user = userData.get({ plain: true });
    //console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
    // res.json(user)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login', { style: "login.css" });
});



router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;