import React, { useState } from "react";
import AmountButton from "../../features/buttons/AmountButton";
import ProductPopUp from "./ProductPopUp";
import { truncateString } from "../../utils";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCart, selectState } from "../../redux/cart/cartSlice";
import { useEffect } from "react";

export default function Product({ productData, storeData }) {
  const [showPopUp, setShowPopUp] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const handleModal = () => {
    setShowPopUp(!showPopUp);
  };
  const store = useSelector(selectCart);

  const addToCart = () => {
    dispatch(
      addItem({
        name: storeData.name,
        imageUrl: storeData.logo.url,
        storeId: productData.storeId,
        product: {
          ...productData,
          quantity: quantity,
          price: productData.price,
        },
      })
    );
  };

  useEffect(() => {
    setQuantity(1);
  }, []);
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
          {productData.description.length > 50 ? (
            <p className="description">
              {truncateString(productData.description, 50)}
              <span className="read-more" onClick={handleModal}>
                ...קרא עוד
              </span>
            </p>
          ) : (
            <p className="description">{productData.description}</p>
          )}
        </div>
        <div className="buttons-container my-2">
          <AmountButton
            button={"-"}
            setCount={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
          />
          <p>{quantity}</p>
          <AmountButton
            button={"+"}
            setCount={() => setQuantity(quantity + 1)}
          />
        </div>
        <div>
          <p>
            <span className="font-bold"> סה"כ</span>
            <span className="mx-1">{productData.price}</span>
            ש"ח
          </p>
        </div>
        <div className="flex justify-center">
        <button
          className="add-to-cart-btn"
          onClick={() => {
            addToCart();
            setQuantity(1);
          }}
        >
          הוסף לעגלה
        </button>
        </div>
      </div>
      <ProductPopUp
        show={showPopUp}
        handleModal={handleModal}
        productData={productData}
      />
    </div>
  );
}
