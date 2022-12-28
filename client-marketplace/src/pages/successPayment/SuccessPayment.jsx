import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import { CiFaceSmile } from "react-icons/ci";
import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";
import {clearCart} from "../../redux/cart/cartSlice"
import { useDispatch } from "react-redux";

export default function SuccessPayment() {
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const clearFromLocalStorageAndSendDataToServer = () => {
    dispatch(clearCart())
    navigate("/");
  };

  return (
    <div className="w-5/12 bg-white flex flex-col items-center my-36 m-auto text-center pt-5 h-[40rem]">
      <FiCheckCircle className="text-8xl text-[#0899A5] mb-10" />
      <div className="text-lg w-3/4 border-b-[1px] border-b-gray-400 mb-4 font-thin">
        <p className="text-4xl">!תודה שהזמנת דרכנו</p>
        <p className="flex items-center justify-center mb-4">
          <CiFaceSmile />
          המשלוח כבר בדרך אלייך
        </p>
      </div>
      <div className="flex flex-col items-center justify-between h-[5rem]">
        <p>מספר הזמנה: {Math.floor(Math.random() * 1000000000000)}</p>
        <Button
          onClick={clearFromLocalStorageAndSendDataToServer}
          outline={true}
          gradientDuoTone="greenToBlue"
        >
          חזרה לאתר
        </Button>
      </div>
    </div>
  );
}
