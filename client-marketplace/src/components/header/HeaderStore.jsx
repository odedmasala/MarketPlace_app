import React from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';
import SectionNavBar from '../navbar/sectionNavbar/SectionNavBar';

export default function HeaderStore({
  storeDetails,
  sections,
  categoryFilter,
}) {
  const { name, description, logo, coverImage, phone, address } = storeDetails;

  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center md:mb-3 h-72 md:h-[390px] w-full flex flex-col justify-end"
        style={{ backgroundImage: `url(${coverImage?.url})` }}
      >
        <div className="hidden md:flex flex-wrap bg-[#ffffffd1] shadow-lg md:shadow-xl flex-row-reverse items-center justify-around">
          <img
            className="relative h-[125px] w-[125px] bottom-[60px] right-[90px]"
            src={logo?.url}
            alt="logo"
          />
          <div className="flex flex-col items-end my-1 w-1/3 text-right">
            <h1 className="text-2xl">{name}</h1>
            <p>{description}</p>
          </div>
          <div className="flex-col items-end my-1 w-1/5">
            <p>
              <span className="px-1">{address?.city},</span>
              <span className="px-1"> {address?.street}</span>
              <span className="px-1">{address?.building}</span>
            </p>
            <p>{phone} : צרו קשר</p>
            <a
              className="flex items-end hover:text-green-500"
              href="https://wa.me/972502224660/?text=אני%20פונה%20אלייך%20מהאתר%20מרקט%20פלייס"
            >
              {' '}
              whatsApp <IoLogoWhatsapp className="ml-1" />
            </a>
          </div>
        </div>
      </div>
      {/* Store details for mobile */}
      <div className=" flex md:hidden flex-row-reverse text-end items-center bg-[#e6dfdf74] bg-opacity-10 shadow-lg mb-10">
        <div className="flex justify-center">
          <img className="h-[110px] w-[110px]" src={logo?.url} alt="logo" />
        </div>
        <div className="flex flex-col items-end px-2 justify-end mb-1">
          <h1 className="text-xl">{name}</h1>
          <p>{description}</p>
        </div>
        <div className="flex-col px-2 mb-1">
          <p>
            <span className="px-1 items-end">{address?.city},</span>
            <span className="px-1 items-end"> {address?.street}</span>
            <span className="px-1 items-end">{address?.building}</span>
          </p>
          <p>{phone} : צרו קשר</p>
          <a
            className="flex items-end justify-end hover:text-green-500"
            href="https://wa.me/972502224660/?text=אני%20פונה%20אלייך%20מהאתר%20מרקט%20פלייס"
          >
            {' '}
            whatsApp <IoLogoWhatsapp className="ml-1" />
          </a>
        </div>
      </div>
      {/* Store details for mobile */}
      <div>
        <SectionNavBar categoryFilter={categoryFilter} sections={sections} />
      </div>
    </div>
  );
}
