import axios from "axios";
import React, { useEffect, useState } from "react";
import Product from "../../product/Product";
import { Textarea } from "flowbite-react";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    image: { url: "" },
    price: "",
    description: "",
    subCategory: "",
    weight: "",
    unit: "",
    gander: "",
    quantity: "",
    gender: "",
    manufacture: "",
    brand: "",
    active: false,
  });
  const [section, setSection] = useState([]);
  const handleInput = (e) => {
    if (e.target.name === "image") {
      setProduct({ ...product, image: { url: e.target.value } });
    } else if (e.target.name === "active") {
      setProduct({ ...product, active: e.target.checked });
    } else {
      setProduct({ ...product, [e.target.name]: e.target.value });
    }
  };

  const deleteAllChanges = () => {
    setProduct({
      name: "",
      image: { url: "" },
      price: "",
      description: "",
      subCategory: "",
      weight: "",
      unit: "",
      gander: "",
      quantity: "",
      gender: "",
      manufacture: "",
      brand: "",
      active: false,
    });
  };
  const findSection = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/section?storeId=63a44ddaa01e048b498ff5f6`
    );
    setSection(data);
  };

  useEffect(() => {
    findSection();
  }, []);

  const saveProduct = async () => {
    const result = axios.post("http....");
  };

  return (
    <>
      <div class="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div class="container max-w-screen-lg mx-auto text-right">
          <div>
            <h2 class="font-semibold text-2xl text-gray-600">מוצר חדש</h2>
            <p class="text-gray-500 mb-6">הכנס מוצר חדש לחנות</p>

            <div class="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div class="text-gray-600">
                  <h1 className="my-3 text-xl font-medium">תצוגה מקדימה</h1>
                  <Product productData={product} />
                </div>

                <div class="lg:col-span-2">
                  <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 text-right">
                      <label htmlFor="full_name">מחיר</label>
                      <input
                        min={0}
                        onChange={handleInput}
                        type="number"
                        name="price"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>
                    <div className="md:col-span-3 text-right">
                      <label htmlFor="full_name">שם המוצר</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <label htmlFor="image">תמונה</label>
                      <div className="h-10 bg-gray-50 text-right flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onChange={handleInput}
                          type="file"
                          name="image"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-5 text-right">
                      <label htmlFor="description">תיאור המוצר</label>
                      <Textarea
                        onChange={handleInput}
                        type="text"
                        name="description"
                        className="text-right"
                      />
                    </div>
                    <div class="md:col-span-2">
                      <label for="city">יצרן</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="manufacture"
                        class="h-10 text-right border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                    </div>

                    <div class="md:col-span-3">
                      <label for="address">קטגוריה</label>
                      <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="subCategory"
                        onClick={handleInput}
                      >
                        {section.map((element) => (
                          <option key={element._id} value={element.name}>
                            {element.name}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div class="md:col-span-5">
                      <div class="inline-flex items-center">
                        <input
                          checked={product.active}
                          onChange={handleInput}
                          type="checkBox"
                          name="active"
                          class="form-checkbox"
                        />
                        <label for="billing_same" class="ml-2">
                          האם המוצר זמין
                        </label>
                      </div>
                    </div>

                    <div class="md:col-span-5 text-right">
                      <div class="flex justify-between items-end">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                          יצירה
                        </button>
                        <button class=" hover:underline font-bold py-2 px-4 rounded">
                          איפוס נתונים
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
