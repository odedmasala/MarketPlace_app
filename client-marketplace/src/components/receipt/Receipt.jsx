import React from "react";

export default function Reciept() {
  return (
    <div className="bg-gray-200 rounded-md px-4 flex flex-col items-end text-right py-7">
      <div className="">
        <h3 className="font-bold">כתובת למשלוח</h3>
        <p>חיפה, הרצל34</p>
      </div>
      <div>
        <h3 className="font-bold">תאריך קנייה</h3>
        <p>22/03/2023</p>
      </div>
      <div className="w-full flex flex-col items-end">
        <div className="flex justify-around w-3/4 items-center my-4">
          <p>מוצר</p>
          <p>כמות</p>
          <p>מחיר</p>
        </div>
        <div className="flex flex-row-reverse justify-around w-3/4 border-t-[1px] border-black h-[3rem] pt-2">
          <p>תפוז</p>
          <p>2</p>
          <p className="flex">
            ש"ח <span>10</span>{" "}
          </p>
        </div>
        <div className="flex flex-row-reverse justify-around w-3/4 border-t-[1px] border-black h-[3rem] pt-2">
          <p>תפוז</p>
          <p>2</p>
          <p className="flex">
            ש"ח <span>10</span>{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse justify-around w-1/5">
        <p>סה"כ</p>
        <p className="flex">
          ש"ח <span>20</span>{" "}
        </p>
      </div>
    </div>
  );
}
