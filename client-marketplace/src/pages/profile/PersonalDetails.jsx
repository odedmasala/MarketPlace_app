import React from "react";

export default function PersonalDetails() {
  return (
    <div className="flex flex-col w-full items-end justify-around mr-2 h-[20rem]">
      <h1 className="text-xl text-right m-5">מידע אישי</h1>
      <div className="details">
        <p className="title-details">שם פרטי</p>
        <input
          defaultValue={"דנה"}
          className="details-input w-full"
          type="text"
        />
      </div>
      <div className="details">
        <p className="title-details">שם משפחה</p>
        <input
          defaultValue={"כהן"}
          className="details-input w-full"
          type="text"
        />
      </div>
      <div className="details">
        <p className="title-details">דואר אלקטרוני</p>
        <input
          defaultValue={"dana@gmail.com"}
          className="details-input w-full"
          type="text"
        />
      </div>
      <div className="details">
        <p className="title-details">טלפון נייד</p>
        <input
          defaultValue={"052-3456789"}
          className="details-input w-full"
          type="text"
        />
      </div>
      <div className="w-3/4">
        <button class=" hover:underline flex justify-end font-bold py-2 px-4 rounded">
          שמור
        </button>
      </div>
    </div>
  );
}
