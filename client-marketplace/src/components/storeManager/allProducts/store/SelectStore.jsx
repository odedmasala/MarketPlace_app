import { Textarea } from "flowbite-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { notify } from "../../../../utils";
import axios from "axios";

const SelectStore = ({ store }) => {
  const navigate = useNavigate();
  const [imgUrl, setImgUrl] = useState("");
  const [storeData, setStoreData] = useState({
    address: {
      apartment: "",
      building: "",
      city: "",
      floor: "",
      street: "",
    },
    bnNumber: "",
    coverImage: "",
    description: "",
    email: "",
    logo: {
      public_id: "",
      url: "",
      _id: "",
    },
    name: "",
    phone: "",
  });

  const handleImg = (e) => {
    const file = e.target.files[0];
    setFileToBase(file);
  };

  const setFileToBase = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };

  const handleInput = (e) => {
    if (e.target.name === "logo") {
      setStoreData({ ...storeData, logo: { url: imgUrl } });
    } else if (
      e.target.name === "city" ||
      e.target.name === "street" ||
      e.target.name === "building" ||
      e.target.name === "apartment" ||
      e.target.name === "floor" ||
      e.target.name === "comment"
    ) {
      setStoreData({
        ...storeData,
        address: { ...storeData.address, [e.target.name]: e.target.value },
      });
    } else {
      setStoreData({ ...storeData, [e.target.name]: e.target.value });
    }
  };

  const saveChange = async () => {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BASE_URL}/api/store/${storeData._id}`,
      storeData
    );
    if (data) {
      notify(data);
    }
  };

  useEffect(() => {
    setStoreData(store);
  }, [store?.bnNumber]);
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto text-right">
          <div>
            <h2 className="font-semibold text-2xl text-gray-600">פרטי החנות</h2>
            <p className="text-gray-500 mb-6">ניתן לשנות במידת הצורך</p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-2">
                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-2 text-right">
                      <label htmlFor="full_name">טלפון</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="phone"
                        value={storeData?.phone}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>
                    <div className="md:col-span-3 text-right">
                      <label htmlFor="full_name">שם</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="name"
                        value={storeData?.name}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>

                    <div className="md:col-span-5 text-right">
                      <label htmlFor="email">דואר אלקטרוני</label>
                      <input
                        onChange={handleInput}
                        type="email"
                        name="email"
                        value={storeData?.email}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>

                    <div className="md:col-span-2 text-right">
                      <label htmlFor="city">רחוב</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="street"
                        value={storeData?.address.street}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>

                    <div className="md:col-span-3 text-right">
                      <label htmlFor="city">עיר</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="city"
                        value={storeData?.address.city}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>

                    <div className="md:col-span-1 text-right">
                      <label htmlFor="city">דירה</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="apartment"
                        value={storeData?.address.apartment}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>
                    <div className="md:col-span-2 text-right">
                      <label htmlFor="city">קומה</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="floor"
                        value={storeData?.address.floor}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>
                    <div className="md:col-span-2 text-right">
                      <label htmlFor="city">בניין</label>
                      <input
                        onChange={handleInput}
                        type="text"
                        name="building"
                        value={storeData?.address.building}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 text-right"
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <label htmlFor="description">תיאור החנות</label>
                      <Textarea
                        onChange={handleInput}
                        type="text"
                        name="description"
                        value={storeData?.description}
                        className="text-right"
                      />
                    </div>
                    <div className="md:col-span-5 text-right">
                      <label htmlFor="coverImage">תמונת רקע</label>
                      <div className="h-10 bg-gray-50 text-right flex border border-gray-200 rounded items-center mt-1">
                        <input
                          onChange={handleInput}
                          type="file"
                          name="coverImage"
                        />
                      </div>
                    </div>
                    <div className="md:col-span-5 text-right">
                      <label htmlFor="logo">לוגו</label>
                      <div className="h-10 bg-gray-50 text-right flex border border-gray-200 rounded items-center mt-1">
                        <input onChange={handleImg} type="file" name="logo" />
                      </div>
                    </div>

                    <div className="md:col-span-5 mt-4 text-right">
                      <div className="flex justify-between">
                        <button
                          onClick={saveChange}
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"

                        >
                          שמור שינויים
                        </button>
                        <button
                          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() =>
                            navigate(`/storeManager/section/${storeData?._id}`)
                          }
                        >
                          לחנות
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

export default SelectStore;
