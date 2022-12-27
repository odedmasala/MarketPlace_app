import axios from "axios";
import React, { useEffect, useState } from "react";

const AddCategory = () => {
  const [newCategory, setNewCategory] = useState({});

  return (
    <div className="flex justify-end">
      <div className="md:w-[40%] flex flex-col">
        <div className="flex flex-row-reverse justify-between py-3 px-2">
          <p className="text-end">שם </p>
          <input
            onChange={(e) => {
              setNewCategory(e.target.value);
            }}
            className="text-end  border-r-0 border-t-0 border-l-0 "
            type="text"
          />
        </div>
        <div>
          <button className="border-2 bg-green-600 hover:bg-green-400 cursor-pointer p-2 text-white">
            שמירה
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
