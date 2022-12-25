import React,{useState} from "react";
import AmountButton from "../../features/buttons/AmountButton";
import ProductPopUp from "./ProductPopUp";
import { truncateString } from "../../utils";

export default function Product({productData}) {
    const [showPopUp, setShowPopUp] = useState(false)
    const handleModal = ()=>{
        setShowPopUp(!showPopUp)
    }

  return (
    <div className="border mb-3"> 
      <div className="product">
        <img
          src={productData.image.url}
          alt="product image"
          className="product-img"
          onClick={handleModal}
        />
        <div className="product-name">
          <h3>{productData.name}</h3>
            {productData.description.length > 50 ?
          <p className="description">
            {truncateString(productData.description,50)}
            <span className="read-more" onClick={handleModal}>...קרא עוד</span>
          </p>
          : <p className="description">{productData.description}</p>
             }
        </div>
        <div className="buttons-container my-2">
          <AmountButton button={"-"} />
          <p>1</p>
          <AmountButton button={"+"} />
        </div>
        <div>
          <p>
            <span className="font-bold"> סה"כ</span>
            <span className="mx-1">{productData.price}</span>
            ש"ח
          </p>
        </div>
      </div>
      <ProductPopUp show={showPopUp} handleModal={handleModal} productData={productData}/>
    </div>
  );
}
