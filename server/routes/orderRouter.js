const router = require("express").Router();
const Stripe = require("stripe");
const nodemailer = require("nodemailer");
const auth = require("../utils/auth");
const User = require("../models/userModel");
const Order = require("../models/orderModel");

//Stripe Payment
const stripe = new Stripe(
  `${process.env.STRIPE_SK}`,
  { apiVersion: '2022-11-15', typescript: true }
)

router.post("/", auth, async (req, res) => {
  try {
    const { order, token } = req.body
    const userId = req.user

    const charge = await stripe.charges.create({
      amount: Number(Math.round(order.totalPrice) * 100),
      currency: 'aud',
      source: token.id,
      description: `CheckOut Order`,
    })
    if (charge.status !== 'succeeded') {
      return res.status(200).json({ success: false })
    }

    let items = []
    order.orders.forEach((item) => {
      items.push({
        productId: item.productId,
        count: item.count
      })
    })

    const newOrder = new Order({
      userId: userId,
      orderItems: items,
      address: order.address,
      phone: order.phone,
      extra: order.extra
    })

    await newOrder.save()

    const user = await User.findById(userId)
    let html = `<html><head><style>table, tr, th, td {font-family: Arial, sans-serif; border:2px solid #000000 !important; border-collapse: collapse;}</style></head><body><table><thead><tr><th>No</th><th>Product</th><th>Price</th><th>Count</th><th></th></tr></thead><tbody>`
    let totalPrice = 0

    order.orders.forEach((item, index) => {
      html += `<tr>
        <td>${index + 1}</td>
        <td>${item.title}</td>
        <td>$${item.price}</td>
        <td>${item.count}</td>
        <td>$${item.count * item.price}</td>
      </tr>`
      totalPrice += item.count * item.price
    });

    html += `<tr><td></td><td></td><td></td><td></td><td>$${totalPrice}</td></tr></tbody></table></body></html>`

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      service: 'Gmail',
      auth: {
        user: "food.hero.mevada@gmail.com", // generated user
        pass: "fouklslweulennnl", // generated password
      },
    });

    // send mail with defined transport object
    await transporter.sendMail({
      from: 'food.hero.mevada@gmail.com', // sender address
      to: user.email, // list of receivers
      subject: "Order Confirmation", // Subject line
      html: html // html body
    });

    return res.status(200).json({ success: true })
  } catch (e) {
    console.log(e)
    res.status(500).json({ error: e.message });
  }
})

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate([
      { path: 'userId' },
      { path: 'orderItems.productId' }
    ])
    
    return res.status(200).json({ success: true, orders: orders })
  } catch (err) {
    return res.status(500).json({ err: err.message })
  }
})

module.exports = router;
