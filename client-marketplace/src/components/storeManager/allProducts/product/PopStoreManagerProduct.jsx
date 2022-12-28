import React, { useEffect, useState } from "react";
import { Modal, Textarea } from "flowbite-react";
import { ModalFooter } from "flowbite-react/lib/esm/components/Modal/ModalFooter";
import axios from "axios";
import { notify } from "../../../../utils";
import { useParams } from "react-router-dom";

const PopStoreManagerProduct = ({ product, show, handleModal,findProducts }) => {
  const [productData, setProductData] = useState(product);
  const [sections, setSections] = useState([]);
  const { id } = useParams();

  const changeProductData = (e) => {
    if (e.target.name === "avgWeightPerUnit") {
      setProductData({
        ...productData,
        weight: { ...productData.weight, avgWeightPerUnit: e.target.value },
      });
    } else if (
      e.target.name === "minimumOrderCartonsCount" ||
      e.target.name === "measureUnits"
    ) {
      setProductData({
        ...productData,
        unit: { ...productData.unit, [e.target.name]: e.target.value },
      });
    } else {
      setProductData({ ...productData, [e.target.name]: e.target.value });
    }
  };
  const findSections = async () => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/section?storeId=${id}`
      
    );
    setSections(data);
  };

  const saveChange = async () => {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/products/${productData._id}`,
      productData
    );
    if (data) {
      notify(data);
      findProducts()
    }
  };
  useEffect(()=>{
    findSections()
  },[product._id])
  return (
    <>
      <div className="bg-black bg-opacity-10">
        <React.Fragment>
          <Modal show={show} size="md" popup={true}>
            <Modal.Header onClick={handleModal} />
            <Modal.Body>
              <div className="lg:col-span-2">
                <img
                  src={productData.image.url}
                  alt="product"
                  className="w-1/3 m-auto"
                />
                <div class="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                  <div className="md:col-span-3 text-right">
                    <label htmlFor="full_name">מחיר</label>
                    <input
                      min={0}
                      onChange={changeProductData}
                      name="price"
                      type={"number"}
                      value={productData.price}
                      className="h-8 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                    />
                  </div>
                  <div className="md:col-span-3 text-right">
                    <label htmlFor="full_name">שם המוצר</label>
                    <input
                      onChange={changeProductData}
                      name="name"
                      type={"text"}
                      value={productData.name}
                      className="h-8 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                    />
                  </div>
                  <div className="md:col-span-6 flex flex-row-reverse items-center justify-between text-right">
                    <label htmlFor="image">תמונה</label>
                    <div className="h-10 w-3/4 bg-gray-50 text-right flex border border-gray-200 rounded items-center mt-1">
                      <input
                        type="file"
                        name="image"
                        onChange={changeProductData}
                      />
                    </div>
                  </div>
                  <div class="md:col-span-3">
                      <label for="address">קטגוריה</label>
                      <select
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        name="subCategory"
                        onClick={changeProductData}
                      >
                        {sections.map((element) => (
                          <option key={element._id} value={element._id}>
                            {element.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  <div className="md:col-span-6 text-right">
                    <label htmlFor="description">תיאור המוצר</label>
                    <Textarea
                      onChange={changeProductData}
                      type="text"
                      name="description"
                      className="text-right"
                      value={productData.description}
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="manufacture">יצרן</label>
                    <input
                      onChange={changeProductData}
                      type="text"
                      name="manufacture"
                      value={productData.manufacture}
                      className="h-8 text-right border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-3">
                    <label htmlFor="barcode">מק"ט</label>
                    <input
                      onChange={changeProductData}
                      type="text"
                      name="barcode"
                      value={productData.barcode}
                      className="h-8 text-right border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="quantity">כמות</label>
                    <input
                      onChange={changeProductData}
                      type="number"
                      name="quantity"
                      value={productData.quantity}
                      className="h-8 text-right border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="measureUnits">יחידות מידה</label>
                    <input
                      onChange={changeProductData}
                      type="text"
                      name="measureUnits"
                      value={productData.unit?.measureUnits}
                      className="h-8 text-right border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="avgWeightPerUnit">משקל ממוצע</label>
                    <input
                      onChange={changeProductData}
                      type="text"
                      name="avgWeightPerUnit"
                      value={productData.weight?.avgWeightPerUnit}
                      className="h-8 text-right border mt-1 rounded px-4 w-full bg-gray-50"
                    />
                  </div>
                </div>
              </div>
              <ModalFooter>
                <button
                  onClick={saveChange}
                  className="bg-green-500 hover:bg-green-700 text-white font-thin py-1 px-4 rounded"
                >
                  שמירה
                </button>
              </ModalFooter>
            </Modal.Body>
          </Modal>
        </React.Fragment>
      </div>
    </>
  );
};

export default PopStoreManagerProduct;
