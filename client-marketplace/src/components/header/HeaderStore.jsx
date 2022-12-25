import React from 'react';

export default function HeaderStore({
  name = 'נוי השדה',
  description = 'חנות ירקות עם מבחר עשיר, כשרות מלאה',
  logo = 'https://res.cloudinary.com/dlcq6p2up/image/upload/c_thumb,w_200,g_face/v1671465512/stores/%D7%A4%D7%99%D7%A8%D7%95%D7%AA%20%D7%99%D7%A8%D7%A7%D7%95%D7%AA/%D7%A0%D7%95%D7%99_%D7%94%D7%A9%D7%93%D7%94_drijdu.png',
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
}) {
  return (
    <div>
      <div className="bg-[url('https://images.pexels.com/photos/128402/pexels-photo-128402.jpeg?auto=compress&cs=tinysrgb&w=800')] bg-no-repeat bg-cover bg-center md:mb-3 h-72 md:h-[390px] w-full flex flex-col justify-end">
        <div className="hidden md:flex flex-wrap bg-[#ffffffd1] shadow-lg md:shadow-xl flex-row-reverse items-end justify-evenly">
          <img
            className="relative items-start h-[125px] w-[125px] bottom-[60px] right-[90px]"
            src={logo}
            alt="logo"
          />
          <div className="flex flex-col items-end my-1">
            <h1 className="text-2xl">{name}</h1>
            <p>{description}</p>
          </div>
          <div className="flex-col items-end my-1">
            <p>
              <span className="px-1">{address?.city},</span>
              <span className="px-1"> {address?.street}</span>
              <span className="px-1">{address?.building}</span>
              <span className="px-2">{address?.zone}</span>
            </p>
            <p>{phone} : צרו קשר</p>
          </div>
        </div>
      </div>
      {/* Store details for mobile */}
      <div className=" flex md:hidden flex-row-reverse text-end items-center bg-[#e6dfdf74] bg-opacity-10 shadow-lg mb-10">
        <div className="flex justify-center">
          <img className="h-[90px] w-[105px]" src={logo} alt="logo" />
        </div>
        <div className="flex flex-col items-end px-2 justify-end mb-1">
          <h1 className="text-xl">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="flex flex-col items-end mb-1">
          <p>
            <span className="px-1 items-end">{address?.city},</span>
            <span className="px-1 items-end"> {address?.street}</span>
            <span className="px-1 items-end">{address?.building}</span>
          </p>
          <p className="text-[11px]">{phone}</p>
        </div>
      </div>
      {/* Store details for mobile */}
    </div>
  );
}
