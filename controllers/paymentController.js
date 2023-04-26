require('dotenv').config();
const Order = require('../models/orderModel');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handlePayment = async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: req.body,
        mode: 'payment',
        success_url: `${process.env.CLIENT_URL}/commande/merci/{CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.CLIENT_URL}/panier`,
    });

    await Order.findByIdAndUpdate(req.params.orderId, { stripeSessionId: session.id }, { new: true });

    res.status(200).json({ id: session.id, url: session.url });
};