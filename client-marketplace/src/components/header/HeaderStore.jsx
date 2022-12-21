import React from 'react';

export default function HeaderStore({
  name = 'אור מלקה',
  description = 'יעקב עזריה הלך לראות את גילי וגילה משחקים',
  logo = 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800',
  // darklogo,
  coverImage = 'https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800',
  phone = '1 - 800 - 800 - 90',
  address = {
    city: 'לוד',
    street: 'שלמה המלך',
    building: '6',
    apartment: '2',
    floor: '4',
    zone: 'השפלה',
  },
  departmentName = 'מזון',
}) {
  return (
    <div className="bg-[url('https://images.pexels.com/photos/205961/pexels-photo-205961.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-no-repeat bg-cover bg-center my-3 h-52 md:h-[370px] w-full flex flex-col justify-end">
      <div className="flex-wrap bg-[#ffffffd1] flex  flex-row-reverse items-end justify-evenly">
        {/* department name for mobile */}
        <p className="text-3xl block md:hidden">{name}</p>
        {/* department name for mobile */}

        <div className="hidden lg:block">
          <img
            className="relative  items-start h-[125px] w-[125px] bottom-[50px] right-[90px]  border-2 border-white"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex-col items-end my-5 text-right hidden md:flex">
          <h1 className="text-2xl ">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="flex-col items-end my-5 text-right hidden md:flex">
          <p>
            <span className="px-2">{address?.city}</span>
            <span className="px-1"> {address?.street}</span>
            <span className="px-1">{address?.building}</span>
            <span className="px-1"> {address?.apartment}</span>
            <span className="px-1"> {address?.floor}</span>
            <span className="px-2">{address?.zone}</span>
          </p>
          <p>{phone}</p>
        </div>
      </div>
    </div>
  );
}
