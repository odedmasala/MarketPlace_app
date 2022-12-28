import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';

const BackButton = () => {
  return (
    <button
      onClick={() => window.history.back()}
      className="bg-slate-100 rounded  hover:bg-gray-200"
    >
      <RiArrowGoBackFill />
    </button>
  );
};

export default BackButton;
