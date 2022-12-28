import React from "react";
import axios from "axios";
import { selectCartTotal } from "../../../redux/cart/cartSlice";
import { useSelector } from "react-redux";

export default function PayButton() {
  const totalPrice = useSelector(selectCartTotal);
  const total = parseFloat(totalPrice).toFixed(1)

  const handleCheckout = () => {
    axios
      .post(`${process.env.REACT_APP_BASE_URL}/api/stripe/create-checkout-session`, {
        total:total,
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
      <button className="bg-green-400 text-white rounded-md p-4" onClick={() => handleCheckout()}> לתשלום {total} ש"ח</button>
    </div>
  );
}
