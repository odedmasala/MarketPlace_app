import axios from "axios";
import React, { useState } from "react";
import { notify } from "../../../../utils";

const SectionComponent = ({
  findProducts,
  findSections,
  section,
  categoryFilter,
}) => {
  const [category, setCategory] = useState(section);

  const changeCategory = (e) => {
    setCategory({ ...category, name: e.target.value });
  };
  const saveChange = async () => {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/section/${category._id}`,
      category
    );
    if (data) {
      notify(data);
    }
  };
  const saveProduct = async (product) => {
    const obj = { ...product };
    obj.subCategory = null;
    await axios.put(`${process.env.REACT_APP_BASE_URL}/api/products/${product._id}`, obj);
  };
  const deleteCategory = async () => {
    const { data: section } = await axios.delete(
      `${process.env.REACT_APP_BASE_URL}/api/section/${category._id}`
    );
    if (section) {
      notify(section);
      const { data } = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/api/products?sectionId=${category._id}`
      );
      if (data.length > 0) {
        data.forEach((element) => {
          saveProduct(element);
        });
      }
      findSections();
      findProducts();
    }
  
  };
  return (

    <div className="md:flex md:flex-row-reverse items-end md:w-[40%] w-full mb-4">
      <div className="text-end" key={section._id}>
        <p> :שם קטגוריה</p>
        <input
          type="text"
          onChange={changeCategory}
          value={category.name}
          className="section-input"
        />
      </div>
      <div className="flex md:w-1/2">
        <button onClick={saveChange} className="section-btn">
          שמור שינויים
        </button>
        <button onClick={deleteCategory} className="section-btn">
          מחיקה
        </button>
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
