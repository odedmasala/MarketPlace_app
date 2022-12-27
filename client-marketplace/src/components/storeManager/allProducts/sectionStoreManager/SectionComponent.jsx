import React, { useState } from "react";

const SectionComponent = ({ section, categoryFilter }) => {
  const [category, setCategory] = useState(section);

  const changeCategory = (e) => {
    setCategory({ ...category, name: e.target.value });
  };

  return (
      <div className="flex flex-row-reverse items-end w-[40%] mb-4">
        <div className="text-end" key={section._id}>
          <p> :שם קטגוריה</p>
          <input
            type="text"
            onChange={changeCategory}
            value={category.name}
            className="section-input"
          />
        </div>
        <div className="flex w-1/2">
          <button className="section-btn">שמור שינויים</button>
          <button
            onClick={() => {
              categoryFilter(section._id);
            }}
            className="section-btn"
          >
            סנן לפי לקטגוריה
          </button>
        </div>
      </div>
  );
};

export default SectionComponent;
