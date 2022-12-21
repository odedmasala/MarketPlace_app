import React from "react";

export default function DetailsUser() {
  return (
    <div className="flex justify-end flex-col">
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>רחוב</h5>
        <input
          className="border-0 text-right"
          type="text"
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5> עיר</h5>
        <input
          className="border-0 text-right"
          type="text"
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5> 2 רחוב</h5>
        <input
          className="border-0 text-right"
          type="text"
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>שם החברה למשלוח</h5>
        <input
          className="border-0 text-right"
          type="text"
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>מיקוד</h5>
        <input
          className="border-0 text-right"
          type="text"
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end items-center mt-2 text-end border-b-2">
        <a className="mx-5 border-b-2" href="#">
          מחק כתובת זו
        </a>
        <button className="bg-teal-500 flex justify-center items-center rounded-md text-white px-12 py-5 ">
          שמור
        </button>
      </div>
    </div>
  );
}
