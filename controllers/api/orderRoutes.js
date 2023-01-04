const router = require('express').Router();
const { Project } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const newOrder = await Order.create({
      product_id: req.params.productId,
      user_id: req.session.user_id,
    });

    console.log('start')

    res.status(200).json(newOrder);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const orderData = await Order.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No order found with this id!' });
      return;
    }

    res.status(200).json(orderData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
