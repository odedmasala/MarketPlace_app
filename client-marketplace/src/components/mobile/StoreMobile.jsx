import React from 'react'

export default function StoreMobile({
    name ='סופר פארם',
    description ='כל מה שתצטרכו במקום אחד',
    logo = 'https://www.icoupons.co.il/wp-content/uploads/2020/10/41241-4.png',
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
    <div className="bg-[url('https://images.pexels.com/photos/13095140/pexels-photo-13095140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-no-repeat bg-cover bg-center h-44 w-[90%] m-auto flex flex-col justify-end">
      <div className="flex-wrap bg-[#ffffffd1] flex  flex-row-reverse items-end justify-evenly h-2/4">
        {/* department name for mobile */}
        <p className="text-3xl">{name}</p>
        {/* department name for mobile */}

        <div className="">
          <img
            className="relative h-[125px] w-[125px] bottom-[50px] left-52 border-2 border-white"
            src={logo}
            alt="logo"
          />
        </div>
        <div className="flex-col items-end my-5 text-right hidden md:flex">
          <h1 className="text-2xl ">{name}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
