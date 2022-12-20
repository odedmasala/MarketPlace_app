import React from "react";

export default function FilterByCities() {
  return (
    <div className="w-2/5 flex flex-col items-end h-[10rem] text-right border-black border-2">
      <h1>:סנן תוצאות לפי</h1>
      <div className="w-3/4 flex justify-around">
        <ul className="w-1/2 flex flex-row-reverse justify-around">
          <div>
            <li className="title-cities">יישובים</li>
            <li>
              <button className="city">חיפה</button>
            </li>
            <li>
              <button className="city">תל-אביב</button>
            </li>
            <li>
              <button className="city">לוד</button>
            </li>
          </div>
          <div className="mt-6">
            <li>
              <button className="city">באר-שבע</button>
            </li>
            <li>
              <button className="city">רמת-גן</button>
            </li>
            <li>
              <button className="city">רחובות</button>
            </li>
          </div>
        </ul>
        <ul>
          <li className="title-cities">אזורים</li>
          <li>
            <button className="city">אזור הצפון </button>
          </li>
          <li>
            <button className="city">אזור המרכז</button>
          </li>
          <li>
            <button className="city">אזור הדרום</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
