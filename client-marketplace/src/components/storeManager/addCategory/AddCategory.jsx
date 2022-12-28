import axios from "axios";
import React, { useEffect, useState } from "react";
import { notify } from "../../../utils";

const AddCategory = () => {
  const [newCategory, setNewCategory] = useState({});
  const store ="63aaf54507d3e05c638e6e62"

  const createSection = async ()=>{
    const { data } = await axios.post(
      `${process.env.REACT_APP_BASE_URL}/api/section`,{
        name:newCategory,
        store
      }
    );
    if (data) {
      notify(data);
     
      
    }
  }

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
          <button onClick={createSection} className="border-2 bg-green-600 hover:bg-green-400 cursor-pointer p-2 text-white">
            שמירה
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCategory;
