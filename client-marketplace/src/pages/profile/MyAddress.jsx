import React from "react";

export default function MyAddress() {
  return (
    <div className="flex flex-col w-full items-end justify-around mr-2 h-[20rem]">
      <h1 className="text-xl text-right m-5">הכתובת שלי</h1>
      <div className="details">
        <p className="title-details">עיר</p>
        <input defaultValue={"תל אביב"} className="details-input" type="text" />
      </div>
      <div className="details">
        <p className="title-details">רחוב</p>
        <input defaultValue={"הרצל"} className="details-input" type="text" />
      </div>
      <div className="details">
        <p className="title-details">קומה</p>
        <input
          defaultValue={"3"}
          className="details-input"
          type="number"
        />
      </div>
      <div className="details">
        <p className="title-details">דירה</p>
        <input
          defaultValue={"4"}
          className="details-input"
          type="number"
        />
      </div>
    </div>
  );
}
