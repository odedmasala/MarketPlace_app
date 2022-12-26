import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


export default function FilterByCities(props) {
  const[filter,setFilter] = useState('')
  const[cities, setCities] = useState([])
  const[zone, setZone] = useState([])

  // const allStores = async()=>{
  //   const { data } = await axios.get(
  //     `http://localhost:8001/api/store`
  //   )
  //   let arr =data.map((store)=>store.address.city)
  //   setCities(arr)

  // }
  // useEffect(()=>{
  //   allStores()
  // },[])
  return (
    <div className=" flex flex-col items-end h-[10rem] text-right px-4 md:px-0">
      <h1 className="text-2xl my-2">:סנן תוצאות לפי</h1>
      <div className="w-3/4 flex justify-around">
        <ul className="w-1/2 flex flex-row-reverse justify-around">
          <div>
            <li className="title-cities">יישובים</li>
            {cities?.map((city, i)=>(
            <li key={i}>
              <button className="city" value={city} onClick={(e)=>{ 
                setFilter(e.target.value);
                props.callback(filter);
                console.log(filter);
                }}>{city}</button>
            </li>
            ))}
            {/* <li>
              <button className="city" onClick={(e)=> props.callback(e.target.value)}>תל-אביב</button>
            </li>
            <li>
              <button className="city" onClick={(e)=> props.callback(e.target.value)}>לוד</button>
            </li>
          </div>
          <div className="mt-6">
            <li>
              <button className="city" onClick={(e)=> props.callback(e.target.value)}>באר-שבע</button>
            </li>
            <li>
              <button className="city" onClick={(e)=> props.callback(e.target.value)}>רמת-גן</button>
            </li>
            <li>
              <button className="city" onClick={(e)=> props.callback(e.target.value)}>רחובות</button>
            </li> */}
          </div>
        </ul>
        <ul>
          <li className="title-cities">אזורים</li>
          <li>
            <button className="city" onClick={(e)=> props.callback(e.target.value)}>צפון </button>
          </li>
          <li>
            <button className="city" onClick={(e)=> props.callback(e.target.value)}>מרכז</button>
          </li>
          <li>
            <button className="city" onClick={(e)=> props.callback(e.target.value)}>דרום</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
