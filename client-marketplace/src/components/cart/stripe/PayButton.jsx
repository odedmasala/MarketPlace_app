import React from "react";
import axios from "axios";

export default function PayButton() {
  const cartItem = [
    {
      image:
        "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
      name: "תפוח",
      price: "4.5",
      qty: "2",
    },
    {
      image:
        "https://www.collinsdictionary.com/images/full/apple_158989157.jpg",
      name: "תפוח",
      price: "4.5",
      qty: "2",
    },
  ];
  const handleCheckout = () => {
    axios
      .post(`http://localhost:8001/api/stripe/create-checkout-session`, {
        cartItem,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((err) => console.log(err.massage));
  };
  return (
    <div className="text-center">
      <button className="bg-green-400 text-white rounded-md p-4" onClick={() => handleCheckout()}> לתשלום 18 ש"ח</button>
    </div>
  );
}
