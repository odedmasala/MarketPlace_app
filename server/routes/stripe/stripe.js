const express = require("express");
const Stripe = require("stripe");
const stripe = Stripe(process.env.STRIPE_KEY);
const router = express.Router();

router.post("/create-checkout-session", async (req, res) => {
  const line_items = req.body.cartItem.map((item) => {
    return {
      price_data: {
        currency: "ils",
        product_data: {
          name: item.name,
          images: [item.images],
        },
        unit_amount: item.price * 100,
      },
      quantity: item.qty,
    };
  });
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `http://localhost:3000/successPage`,
    cancel_url: `http://localhost:3000`,
  });

  res.send({ url: session.url });
});

module.exports = router;
