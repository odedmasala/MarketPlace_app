import React from 'react';
import { Avatar } from 'flowbite-react';
import SearchInput from '../../../features/searchInput/SearchInput';
import { ImLocation } from 'react-icons/im';
import { RiArrowGoBackFill } from 'react-icons/ri';
export default function NavBarUserIsConnected() {
  return (
    <div className="flex justify-evenly md:w-3/4 items-center ">
      <SearchInput />
      <div className="flex justify-between items-center md:w-4/12 lg:w-3/12">
        <div className="flex md:flex-row flex-col-reverse justify-between w-full text-right mr-3">
          <p className="flex items-center justify-end">
            מודיעין <ImLocation className="text-green-400" />
          </p>
          <p>שלום דנה</p>
          <div>
            <RiArrowGoBackFill />
          </div>
        </div>
        <Avatar
          img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
          rounded={true}
        />
      </div>
    </div>
  );
}
