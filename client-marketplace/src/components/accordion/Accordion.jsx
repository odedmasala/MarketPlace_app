import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectCart, selectCartTotal } from "../../redux/cart/cartSlice";
import CartStores from "../cart/stores/CartStores";
import AccordionUI from "./AccordionUI";

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index) => {
    if (activeIndex === index) {
      setActiveIndex(-1);
    } else {
      setActiveIndex(index);
    }
  };
  const navigate = useNavigate();
  const cartState = useSelector(selectCart);
  const cartStateArray = Object.keys(cartState);
  const totalPrice = useSelector(selectCartTotal);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(cartStateArray.map((key) => cartState[key]));
  }, [cartState]);

  return (
    <>
      <div className="w-full border-solid border-gray-500 bg-white border">
        <div className="bg-gray-800 text-white py-5 flex justify-center">
          <h1 className="text-2xl">עגלת קניות</h1>
        </div>
        {cart.length <= 0 ? (
          <div className="flex justify-center">
            <p className="my-10 text-xl">אין מוצרים בעגלה</p>
          </div>
        ) : (
          <div>
            {cart.map((store, index) => (
              // <CartStores key={i} store={store} />
              <AccordionUI
              key={index}
              activeIndex={activeIndex}
              indexStore={index}
              handleClick={handleClick}
              store={store} 
            />
            ))}
          </div>
        )}
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
          לתשלום 0 ש"ח
        </button>
      </div>
    </>
  );
};
export default Accordion;
