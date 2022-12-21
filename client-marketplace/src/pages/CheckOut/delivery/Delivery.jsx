import React from "react";
import { AiFillClockCircle } from "react-icons/ai";
import { HiOutlineBars3CenterLeft } from "react-icons/hi2";
import DayBtnDate from "./dayBtn/DayBtnDate";
import TimeBtn from "./timeBtn/TimeBtn";

export default function Delivery() {
  return (
    <div>
      <div className="flex justify-end text-end flex-col">
        <p className="mb-2 text-gray-500 dark:text-gray-400">בחר שעה למשלוח</p>
        <div className="flex justify-end mt-2">
          <div className="flex justify-end border-2  border-teal-500 rounded-2xl p-1 w-96 ">
            <p className="mx-1 text-sm md:text-lg ">משלוח אקספרס - מגיע לביתך תוך שעה</p>
            <div className="flex text-red-600">
              <AiFillClockCircle size={"25px"} />
              <HiOutlineBars3CenterLeft size={"25px"} />
            </div>
          </div>
        </div>
          <div className="flex w-full justify-end flex-wrap-reverse columns-2xl mt-4">
            <DayBtnDate day={"חמישי"} date={"17.09"} />
            <DayBtnDate day={"רבעי"} date={"16.09"} />
            <DayBtnDate day={"שלישי"} date={"15.09"} />
            <DayBtnDate day={"שני"} date={"14.09"} />
            <DayBtnDate day={"ראשון"} date={"13.09"} />
        </div>
        <div>
          <TimeBtn time={"09:00-10:00"}/>
          <TimeBtn time={"10:00-11:00"}/>
          <TimeBtn time={"11:00-12:00"}/>
          <TimeBtn time={"12:00-13:00"}/>
          <TimeBtn time={"13:00-14:00"}/>
        </div>
      </div>
    </div>
  );
}
