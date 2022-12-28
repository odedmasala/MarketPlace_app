import React from "react";
import { ImLocation } from "react-icons/im";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import { AiFillClockCircle } from "react-icons/ai";
import { BsCreditCard2FrontFill } from "react-icons/bs";
import DetailsUser from "./details/DetailsUser";
import Delivery from "./delivery/Delivery";
import Payment from "./payment/Payment";
import { useState } from "react";
export default function CheckOut() {
  const [toggle, setToggle] = useState(false);
  const [patAccordion, setPayAccordion] = useState(false);
  return (
    <div className="w-[85%]">
      <div className="flex-col">
        <div className="flex justify-between  w-full">
          <div>
            {toggle ? (
              <RiArrowDropRightLine size={"50px"} />
            ) : (
              <RiArrowDropDownLine size={"50px"} />
            )}
          </div>
          <div className="flex items-center">
            <h3 className="px-2 text-2xl">הוסף כתובת למשלוח</h3>
            <ImLocation className="text-teal-500" size={"30px"} />
          </div>
        </div>
        <div className={toggle ? "hidden" : ""}>
          <DetailsUser toggle={setToggle} />
        </div>
      </div>
      <div className="flex-col">
        <div className="flex justify-between  w-full">
          <div>
            {toggle ? (
              <RiArrowDropRightLine size={"50px"} />
            ) : (
              <RiArrowDropDownLine size={"50px"} />
            )}
          </div>
          <div className="flex items-center">
            <h3 className="px-2 text-2xl">זמן למשלוח</h3>
            <AiFillClockCircle className="text-teal-500" size={"30px"} />
          </div>
        </div>
        <div className={patAccordion?"hidden":""}>{toggle ? <Delivery nextPage={setPayAccordion} /> : ""}</div>
      </div>
      <div className="flex-col">
        <div className="flex justify-between  w-full">
          <div>
            {patAccordion ? (
               <RiArrowDropDownLine size={"50px"} />
            ) : (
              <RiArrowDropRightLine size={"50px"} />
            )}
          </div>
          <div className="flex items-center">
            <h3 className="px-2 text-2xl">תשלום</h3>
            <ImLocation className="text-teal-500" size={"30px"} />
          </div>
        </div>
        <div>
          {patAccordion?<Payment/>:""}
        </div>
      </div>
    </div>
  );
}
