import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectStore from "./store/SelectStore";

const AllStores = () => {
  const [stores, setStores] = useState([]);
 
  const getData = async () => {
    const { data: storeManager } = await axios.get(
      "http://localhost:8001/api/storeManager/63a82c97c672788abe31e60f"
    );
    await storeManager.stores.forEach((store) =>
      getStoresData(store)
    );   
  };

  const getStoresData = async (store) => {
    const { data } = await axios.get(
      "http://localhost:8001/api/store/" + store
    );
    setStores([...stores,data]);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {stores.map((store, i) => (
        <SelectStore key={i} store={store} />
      ))}
    </div>
  );
};

export default AllStores;
