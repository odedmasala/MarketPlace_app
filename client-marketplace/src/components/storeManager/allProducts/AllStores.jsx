import React from "react";
import SelectStore from "./store/SelectStore";


const AllStores = () => {
 
  const stores =[{id:"1",name:"A store"},{id:"2",name:"B store"}]
  return (
  
    <div>
      {
        stores.map((store,i)=>(<SelectStore key={i} store={store}/>))
      }
      
    </div>
  );
};

export default AllStores;
