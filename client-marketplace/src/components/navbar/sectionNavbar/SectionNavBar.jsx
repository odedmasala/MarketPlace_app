import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function SectionNavBar() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [sections, setSections] = useState([]);
  const [products, setProducts] = useState([]);
  const [showProducts, setShowProducts] = useState([]);

  const findSections = async () => {
    const { data } = await axios.get(
      `http://localhost:8001/api/section?storeId=${id}`
    );
    setSections(data);
  };
  const findProducts = async () => {
    const { data } = await axios.get(
      `http://localhost:8001/api/products?storeId=${id}`
    );
    setProducts(data);
    setShowProducts(data);
  };
  const categoryFilter = (id) => {
    setShowProducts(products.filter((product) => product.subCategory === id));
  };
  useEffect(() => {
    findSections();
    findProducts();
  }, [id]);

  return (
    <div className="text-center">
      {sections.map((element, index) => (
        <button
          className="border-r-4 p-2 md:p-5"
          key={index}
          onClick={() => {
            categoryFilter(element._id);
          }}
        >
          {element.name}
        </button>
      ))}
    </div>
  );
}
