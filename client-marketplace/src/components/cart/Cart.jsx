import React from "react";
import { useSelector } from "react-redux";
import CartStores from "./stores/CartStores";
import { selectCart, selectCartTotal } from "../../redux/cart/cartSlice";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const cartState = useSelector(selectCart);
  const totalPrice = useSelector(selectCartTotal);
  const [cart, setCart] = useState([]);

  useEffect(()=>{
    const cartStateArray = Object.keys(cartState)
    setCart(cartStateArray.map((key)=> cartState[key]));
  },[cartState])

  return (
    <div
      className="z-[1000] w-full border-solid border-gray-500 
    bg-white border"
    >
      <div>
        <div className="bg-gray-800 text-white py-5 flex justify-center">
          <h1 className="text-2xl">עגלת קניות</h1>
        </div>
        {cart.length <= 0 ? (
          <div className="flex justify-center">
            <p className="my-10 text-xl">אין מוצרים בעגלה</p>
          </div>
        ) : (
          <div>
            {cart.map((store, i) => (
              <CartStores key={i} store={store} />
            ))}
          </div>
        )}
      </div>
      <div className="border py-5 px-2 ">
        <p className="flex justify-between items-end flex-row-reverse">
          <span>:סה"כ</span>
          <span className="text-end"> ש"ח</span>
        </p>
        <p className="flex justify-between items-end flex-row-reverse">
          <span>:בקניה חסכת</span>
          <span>0 ש"ח</span>
        </p>
        <p className="flex justify-between items-end flex-row-reverse">
          <span>:מספר מוצרים </span>
          <span>0 ש"ח</span>
        </p>
      </div>
      <button
        onClick={() => navigate("/checkOut")}
        className="bg-teal-500 w-full h-[50px] text-white text-2xl "
      >
        {" "}
        לתשלום 0 ש"ח
      </button>
    </div>
  );
};

export default Cart;
