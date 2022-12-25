import React from 'react';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Department from '../../components/department/Department';
import FooterHomePage from '../../components/footer/FooterHomePage';
import axios from 'axios';

const HomePage = () => {
  const [allDepartments, setAllDepartments] = useState([]);

  const getDepartments = async () => {
    const { data } = await axios.get('http://localhost:8001/api/department');
    setAllDepartments(data);
  };

  useEffect(() => {
    getDepartments();
  }, []);

  return (
    <div>
      <div
        className="bg-[url('https://images.pexels.com/photos/4443494/pexels-photo-4443494.jpeg?auto=compress&cs=tinysrgb&w=1600')]
        bg-no-repeat bg-center bg-cover flex flex-col items-center h-full py-8 px-4 md:px-20 justify-between text-right"
      >
        <div className="w-full md:w-[80%] px-8 mb-6 md:mt-14 ">
          <h1 className="text-4xl text-center mb-8">
            ברוך הבא לעולם החנויות שלך
          </h1>
          <input
            className="text-right w-full opacity-80 pr-10 border-none md:border-solid md:border-stone-400 rounded-sm"
            type="text"
            placeholder="מה תרצה לחפש היום"
          />
        </div>
        <div className="w-full md:w-[80%]">
          <h1 className="text-3xl text-center my-6">קטגוריות שונות</h1>
          <div className="w-full flex flex-wrap items-center justify-center">
            {allDepartments.map((department) => (
              <Department department={department} key={department._id} />
            ))}
          </div>
        </div>
      </div>
      <FooterHomePage />
    </div>
  );
};

export default HomePage;
