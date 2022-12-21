import React,{useState} from "react";
import AmountButton from "../../features/buttons/AmountButton";
import ProductPopUp from "./ProductPopUp";

export default function Product() {
    const [showPopUp, setShowPopUp] = useState(false)
    const handleModal = ()=>{
        setShowPopUp(!showPopUp)
    }

  return (
    <div className="border mb-3"> 
      <div className="product" onClick={handleModal}>
        <img
          src="https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg"
          alt=""
        />
        <div className="product-name">
          <h3>תפוזים</h3>
          <p className="description">
            קצת על המוצר, קצת על המוצר קצת על המוצר קצת על המוצר קצת על המוצר
          </p>
        </div>
        <div className="buttons-container my-2">
          <AmountButton button={"-"} />
          <p>2</p>
          <AmountButton button={"+"} />
        </div>
        <div>
          <p>
            <span className="font-bold"> סה"כ</span>
            <span className="mx-1">9.90</span>
            ש"ח
          </p>
        </div>
      </div>
      <ProductPopUp show={showPopUp} handleModal={handleModal}/>
    </div>
  );
}
