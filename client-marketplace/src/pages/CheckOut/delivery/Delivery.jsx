import React from "react";
import { useState } from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import DayBtnDate from "./dayBtn/DayBtnDate";
import TimeBtn from "./timeBtn/TimeBtn";

export default function Delivery({ nextPage }) {
  const [paymentTabs, setPaymentTabs] = useState(false);
  const daysArray = [
    { day: "חמישי", date: `29/12` },
    { day: "רביעי", date: `28/12` },
    { day: "שלישי", date: `27/12` },
    { day: "שני", date: `26/12` },
    { day: "ראשון", date: `25/12` },
  ];

  const timeArray = [
    { time: "09:00-10:00" },
    { time: "10:00-11:00" },
    { time: "11:00-12:00" },
    { time: "12:00-13:00" },
    { time: "13:00-14:00" },
  ];
  return (
    <div>
      <div className="flex justify-end text-end flex-col">
        <p className="mb-2 text-gray-500 dark:text-gray-400">בחר שעה למשלוח</p>
        <div className="flex justify-end mt-2">
          <div className="flex justify-end border-2  border-teal-500 rounded-2xl p-1 w-96 ">
            <p className="mx-1 text-sm md:text-lg ">
              משלוח אקספרס - מגיע לביתך תוך שעה
            </p>
            <div className="flex text-red-600">
              <AiFillClockCircle size={"25px"} />
              <HiOutlineBars3CenterLeft size={"25px"} />
            </div>
          </div>
        </div>
        <div className="flex w-full justify-end flex-wrap-reverse columns-2xl mt-4">
          {daysArray.map((item, i) => {
            return (
              <div key={i}>
                <DayBtnDate day={item.day} date={item.date} />
              </div>
            );
          })}
        </div>
        <div>
          {timeArray.map((item, i) => {
            return (
              <div key={i}>
                <TimeBtn time={item.time} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => nextPage(!paymentTabs)}
          className="bg-green-500 px-1 text-white rounded-md text-sm mt-5 py-2 w-3/12"
        >
          המשך לתשלום
        </button>
      </div>
    </div>
  );
}
