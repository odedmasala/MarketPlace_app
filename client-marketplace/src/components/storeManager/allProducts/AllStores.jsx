import axios from "axios";
import React, { useEffect, useState } from "react";
import SelectStore from "./store/SelectStore";

const AllStores = () => {
  const [stores, setStores] = useState([]);
 
  const getData = async () => {
    const { data: storeManager } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/storeManager/63abc8f68e3c44866c2f202e`
    );
    await storeManager.stores.forEach((store) =>getStoresData(store)
    );   
  };

  const getStoresData = async (store) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/api/store/${store}` 
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
