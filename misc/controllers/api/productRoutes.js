const router = require('express').Router();
const { Product } = require('../../models');
const withAuth = require('../../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const products = await Product.findAll();

        res.status(200).json(products);
    } catch (err) {
        res.status(400).json(err);
    }
});


module.exports = router;