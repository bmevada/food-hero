const router = require('express').Router();
const userRoutes = require('../userRoutes');
const userRoutes = require('./adminRoutes');
const orderRoutes = require('../orderRoutes');
const productRoutes = require('../productRoutes');


router.use('/user', userRoutes);
router.use('/user', adminRoutes);
router.use('/order', orderRoutes);
router.use('/product', productRoutes);



module.exports = router;