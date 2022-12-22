import React from "react";
import { Modal } from "flowbite-react";

const PopStoreManagerProduct = ({ product, show, handleModal }) => {
  return (
    <div className="bg-black bg-opacity-10">
      <React.Fragment>
        <Modal show={show} size="sm" popup={true}>
          <Modal.Header onClick={handleModal} />
          <Modal.Body>
            <div className="space-y-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 flex flex-col items-center">
              <div>
                <img src={product.image} alt="product" />
                <div className="flex flex-row-reverse">
                  <p className="">תמונה</p>
                  <input
                    type={"text"}
                    className="text-right"
                    defaultValue={product.image}
                  />{" "}
                </div>
              </div>
              <div className="flex self-end">
                <div
                  className="flex w-20 flex-row-reverse font-bold items-center "
                  style={{ color: "#09ACA2" }}
                >
                  <input
                    className="mx-1 text-right  grow "
                    type={"number"}
                    defaultValue={product.price}
                  />
                  <span>שח</span>
                </div>
              </div>
              <div className="">
                <div className="text-right">
                  <p className="font-bold">מידע</p>

                  <p className="my-3">
                    <input
                      type={"text"}
                      className="text-right"
                      defaultValue={product.name}
                    />{" "}
                    שם
                  </p>
                  <p>
                    <input
                      type={"text"}
                      className="text-right text-xs w-fit"
                      defaultValue={product.description}
                    />{" "}
                    תיאור
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
};

export default PopStoreManagerProduct;
