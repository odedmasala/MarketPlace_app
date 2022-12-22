import React from "react";

export default function PersonalDetails({obj}) {
  return (
    <div className="flex flex-col items-end justify-around mr-2 h-[20rem]">
      <h1 className="text-xl text-right m-5">מידע אישי</h1>
      <div className="details">
        <p className="title-details">שם פרטי</p>
        <p>אלונה </p>
      </div>
      <div className="details">
        <p className="title-details">שם משפחה</p>
        <p>כהן </p>
      </div>
      <div className="details">
        <p className="title-details">דואר אלקטרוני</p>
        <p>alona111@gmail.com</p>
      </div>
      <div className="details">
        <p className="title-details">טלפון נייד</p>
        <p>052-34256781</p>
      </div>
    </div>
  );
}
