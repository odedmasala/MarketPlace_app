import React, { useState } from "react";

export default function DetailsUser({ toggle }) {
  const [changeToggle, setChangeToggle] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    building: "",
    apartment: "",
    zip: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };
  return (
    <div className="flex justify-end flex-col">
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>רחוב</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="street"
          onChange={handleInput}
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5> עיר</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="city"
          onChange={handleInput}
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5> בניין</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="building"
          onChange={handleInput}
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>דירה</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="apartment"
          onChange={handleInput}
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>מיקוד</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="zip"
          onChange={handleInput}
          placeholder="טקסט חופשי"
        />
      </div>
      <div className="flex justify-end items-center mt-2 text-end border-b-2">
        <a className="mx-5 border-b-2" href="#">
          מחק כתובת זו
        </a>
        <button
          onClick={() => toggle(!changeToggle)}
          className="bg-teal-500 flex justify-center items-center rounded-md text-white px-12 py-5 "
        >
          שמור
        </button>
      </div>
    </div>
  );
}
