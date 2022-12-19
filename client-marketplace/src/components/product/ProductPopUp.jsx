import React from "react";
import AmountButton from "../../features/buttons/AmountButton";
import { Modal } from "flowbite-react";

export default function ProductPopUp({ show, handleModal }) {
  const product = {
    img: "https://www.santosfood.com/wp-content/uploads/2020/01/img-7.jpg",
    name: "תפוזים",
    description: "קצת על המוצר קצת על המוצר קצת על המוצר קצת על המוצר",
    price: "9.90",
    number:"1234567875",
    store:"החווה של דוד משה"
  };
  return (
    <div className="bg-black bg-opacity-10">
      <React.Fragment>
        <Modal show={show} size="sm" popup={true} onClose={handleModal}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 flex flex-col items-center">
              <img src={product.img} alt="product"/>
              <div className="flex self-end">
                <div
                  className="flex flex-row-reverse font-bold"
                  style={{ color: "#09ACA2" }}
                >
                  <p className="mx-1">{product.price}</p>
                  <p>ש"ח</p>
                </div>
              </div>
              <div className="flex">
                <AmountButton button={"-"} />
                <p>2</p>
                <AmountButton button={"+"} />
              </div>
              <div className="product-description w-full">
                    <div className="description-section">
                        <p>{product.number}</p>
                        <p>מק"ט</p>
                    </div>
                    <div className="description-section">
                        <p>{product.store}</p>
                        <p>מותג</p>
                    </div>
                    <div className="text-right">
                        <p>מידע</p>
                        <p className="text-xs">{product.description}</p>
                    </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
}
