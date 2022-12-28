import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function DetailsUser({ toggle }) {
  const [changeToggle, setChangeToggle] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    building: "",
    apartment: "",
    zip: "",
  });

  const notify = () => {
    toast.success(" !הכתובת נוספה בהצלחה", {
      position: "bottom-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };
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
          required
          onChange={handleInput}
          placeholder="רחוב"
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5> עיר</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="city"
          required
          onChange={handleInput}
          placeholder="עיר "
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5> בניין</h5>
        <input
          className="border-0 text-right"
          type="text"
          required
          name="building"
          onChange={handleInput}
          placeholder="בניין "
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>דירה</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="apartment"
          required
          onChange={handleInput}
          placeholder="דירה "
        />
      </div>
      <div className="flex justify-end mt-2 flex-col text-end border-b-2">
        <h5>מיקוד</h5>
        <input
          className="border-0 text-right"
          type="text"
          name="zip"
          required
          onChange={handleInput}
          placeholder="מיקוד "
        />
      </div>
      <div className="flex justify-end items-center mt-2 text-end border-b-2">
        <a className="mx-5 border-b-2" href="#">
          מחק כתובת זו
        </a>
        <button
          onClick={() => {
            toggle(!changeToggle);
            notify();
            localStorage.setItem("Address", JSON.stringify(address));
          }}
          className="bg-teal-500 flex justify-center items-center rounded-md text-white px-5 py-2 my-2 "
        >
          שמור
        </button>
      </div>
    </div>
  );
}
