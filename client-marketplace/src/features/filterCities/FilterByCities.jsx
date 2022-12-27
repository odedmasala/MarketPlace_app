import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function FilterByCities(props) {
  const [filter, setFilter] = useState("");
  const [cities, setCities] = useState([]);
  const [zone, setZone] = useState([]);

  const allStores = async () => {
    let citiesInStores = props.stores?.map((store) => store.address.city);
    citiesInStores = citiesInStores.filter(function (item, pos) {
      return citiesInStores.indexOf(item) == pos;
    });
    // let zoneInStores = data.map((store) => store.address.zone);
    // zoneInStores = zoneInStores.filter(function (item, pos) {
    //   return zoneInStores.indexOf(item) == pos;
    // });

    setCities(citiesInStores);
    // setZone(zoneInStores);
  };
  useEffect(() => {
    allStores();
  }, [props.stores]);
  useEffect(() => {
    props.callback(filter)
  }, [filter.length]);
  return (
    <div className="flex flex-col items-end h-[10rem] text-right px-4 md:px-0">
      <h1 className="text-2xl my-2">:סנן תוצאות לפי</h1>
      <div className="w-full flex justify-around">
        <ul className="w-[70%]">
            <li className="title-cities">יישובים</li>
            <div className="">
            {cities?.map((city, i) => (
              <li key={i} className=''>
                <button
                  className="city"
                  value={city}
                  onClick={(e) => {
                    setFilter(e.target.value);
                  }}
                >
                  {city}
                </button>
              </li>
            ))}
            </div>
        </ul>
        <ul className="w-[30%]">
          <li className="title-cities">אזורים</li>
          {zone.map((z, i)=>(
          <li key={i}>
            <button
              className="city"
              value={z}
              onClick={(e) => props.callback(e.target.value)}
            >
              {z}
            </button>
          </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
