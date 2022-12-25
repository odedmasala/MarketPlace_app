import React from "react";

export default function NavBarUserIsNotConnected() {
  return (
    <div className="w-[53%] hidden sm:flex justify-between text-xs  xl:text-base text-right">
      <a
        className="mx-1 hover:text-lime-400 hover:border-b-2  hover:border-b-lime-400 p-1"
        href="#"
      >
        כניסת משתמש
      </a>
      <a
        className="mx-1 hover:text-lime-400 hover:border-b-2  hover:border-b-lime-400 p-1"
        href="#"
      >
        הרשמה
      </a>
      <a
        className="mx-1 hover:text-lime-400 hover:border-b-2  hover:border-b-lime-400 p-1"
        href="#"
      >
        איכות הסביבה
      </a>
      <a
        className="mx-1 hover:text-lime-400 hover:border-b-2  hover:border-b-lime-400 p-1"
        href="#"
      >
        תנאי שימוש
      </a>
      <a
        className="mx-1 hover:text-lime-400 hover:border-b-2  hover:border-b-lime-400 p-1"
        href="#"
      >
        צור קשר
      </a>
    </div>
  );
}
