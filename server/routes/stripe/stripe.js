const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const total = +req.body.total;
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: [
      {
        price_data: {
          currency: "ils",
          product_data: {
            name: "MarketPlace",
          },
          unit_amount: total * 100,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `http://localhost:3000/successPage`,
    cancel_url: `http://localhost:3000`,
  });

  res.send({ url: session.url });
});

module.exports = router;
