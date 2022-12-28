import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FiMap } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

export default function UserLocationPopUp() {
  const [visible, setVisible] = useState(false);
  const [cities, setCities] = useState([]);

  const closePopUp = () => {
    setVisible(!visible);
  };

  const getCities = async () => {
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_URL}/api/store`);
    setCities(data);
  };

  const filterCities = cities?.map((city) => city.address.city);

  useEffect(() => {
    getCities();
  }, []);

  const navigate = useNavigate();

  return (
    <div className={visible ? 'hidden' : 'block'}>
      <div className="z-50 fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center">
        <div className="flex flex-col items-center justify-between mt-8 bg-white p-4 w-[350px] md:w-[500px] h-[250px]">
          <button onClick={closePopUp} className="self-end text-[#3b3c3e99]">
            X
          </button>
          <FiMap className="text-[#A4D11E] text-3xl" />
          <h1 className="text-2xl text-[#3b3c3e99]">
            ? אנא יידע אותנו לגבי מיקומך
          </h1>
          <select
            className="text-sm w-[220px] text-[#3b3c3e99]"
            id="countrySelect"
            size="1"
          >
            <option disabled selected>
              בחר איזור משלוח
            </option>
            {filterCities.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <div>
            <button
              onClick={closePopUp}
              className="bg-[#A4D11E] hover:bg-sky-400 w-[170px] h-[40px] p-2 rounded text-white"
            >
              התחל קנייה
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
