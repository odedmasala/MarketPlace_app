import React, { useState } from "react";
import { Modal } from "flowbite-react";

const PopStoreManagerProduct = ({ product, show, handleModal }) => {
  const [productData, setProductData] = useState(product)

  const changeProductData =(e)=>{
    if(e.target.name === "avgWeightPerUnit"){
      setProductData({...productData,weight:{...productData.weight,avgWeightPerUnit:e.target.value}})

    }else if(e.target.name === "minimumOrderCartonsCount"||e.target.name === "measureUnits"){
      setProductData({...productData,unit:{...productData.unit,[e.target.name]:e.target.value}})
      
    }else{
      
      setProductData({...productData,[e.target.name]:e.target.value})
    }

  }
  return (
    <div className="bg-black bg-opacity-10">
      <React.Fragment>
        <Modal show={show} size="md" popup={true}>
          <Modal.Header onClick={handleModal} />
          <Modal.Body>
            <div className="space-y-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 flex flex-col items-center">
              <div>
                <img src={productData.image.url} alt="product" />
                <div className="flex flex-col items-end ">
                  <p className="">תמונה</p>
                  <input onChange={changeProductData} name="image" type={"file"} className="my-2 w-5/6" />{" "}
                </div>
              </div>
              <div className="flex self-end">
                <div
                  className="flex w-20 flex-row-reverse font-bold items-center "
                  style={{ color: "#09ACA2" }}
                >
                  <input onChange={changeProductData} name="price"
                    className="mx-1 text-right  grow "
                    type={"number"}
                    value={productData.price}
                  />
                  <span>שח</span>
                </div>
              </div>
              <div className="name">
                <div className="text-right">
                  <p className="my-3">
                    <input onChange={changeProductData} name="name"
                      type={"text"}
                      className="text-right"
                      value={productData.name}
                    />{" "}
                    שם
                  </p>
                  <p>
                    <input onChange={changeProductData} name="description"
                      type={"text"}
                      className="text-right text-xs w-fit"
                      value={productData.description}
                    />{" "}
                    תיאור
                  </p>
                  <p>
                    <input onChange={changeProductData} name="barcode"
                      type={"text"}
                      className="text-right text-xs w-fit"
                      value={productData.barcode}
                    />{" "}
                    מק"ט
                  </p>
                  <p>
                    <input onChange={changeProductData} name="manufacture"
                      type={"text"}
                      className="text-right text-xs w-fit"
                      value={productData.manufacture}
                    />{" "}
                    יצרן{" "}
                  </p>
                  <p>
                    <input onChange={changeProductData} name="quantity"
                      type={"number"}
                      className="text-right text-xs w-fit"
                      value={productData.quantity}
                    />{" "}
                    כמות{" "}
                  </p>
                  <p>
                    <input onChange={changeProductData} name="measureUnits"
                      type={"text"}
                      className="text-right text-xs w-fit"
                      value={productData.unit?.measureUnits}
                    />{" "}
                    יחידת מידה{" "}
                  </p>
                  <p>
                    <input onChange={changeProductData} name="minimumOrderCartonsCount"
                      type={"text"}
                      className="text-right text-xs w-fit"
                      value={productData.unit?.minimumOrderCartonsCount}
                    />{" "}
                    מינימום להזמנה{" "}
                  </p>
                  <p>
                    <input onChange={changeProductData} name="avgWeightPerUnit"
                      type={"text"}
                      className="text-right text-xs w-fit"
                      value={productData.weight?.avgWeightPerUnit}
                    />{" "}
                    משקל ממוצע{" "}
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <button className="border-2 bg-green-600 hover:bg-green-400 cursor-pointer p-2 text-white">שמירה</button>
          </Modal.Footer>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default PopStoreManagerProduct;
