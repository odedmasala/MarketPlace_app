import React from "react";
import AmountButton from "../../features/buttons/AmountButton";
import { Modal } from "flowbite-react";
import { truncateString } from "../../utils";


export default function ProductPopUp({ show, handleModal, productData }) {
  return (
    <div className="bg-black bg-opacity-10">
      <React.Fragment>
        <Modal show={show} size="sm" popup={true} onClose={handleModal}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 flex flex-col items-center">
              <img className="product-img-popUp" src={productData.image.url} alt="product"/>
              <div className="flex self-end">
                <div
                  className="flex flex-row-reverse font-bold"
                  style={{ color: "#09ACA2" }}
                >
                  <p className="mx-1">{productData.price}</p>
                  <p>ש"ח</p>
                </div>
              </div>
              <div className="product-description-popUp w-full">
                    <div className="description-section">
                        <p>{productData.barcode}</p>
                        <p>מק"ט</p>
                    </div>
                    <div className="description-section">
                        <p>{productData.brand}</p>
                        <p>מותג</p>
                    </div>
                    <div className="text-right">
                        <p>מידע</p>
                        <p className="text-xs">{truncateString(productData.description,200)}</p>
                    </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
}
