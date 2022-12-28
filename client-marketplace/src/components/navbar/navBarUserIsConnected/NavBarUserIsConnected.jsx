import React from "react";
import { Avatar } from "flowbite-react";
import SearchInput from "../../../features/searchInput/SearchInput";
import { ImLocation } from "react-icons/im";
import BackButton from "../../../features/buttons/BackButton";
import LogoutButton from "../../../features/buttons/LogoutButton";
export default function NavBarUserIsConnected({ user }) {
  return (
    <div className="flex justify-evenly md:w-3/4 items-center ">
      <SearchInput />
      <div className="flex justify-between items-center md:w-4/12 lg:w-3/12">
        <div className="flex md:flex-row flex-col-reverse justify-between w-full text-right mr-3">
          <p className="flex items-center justify-end">
            מודיעין <ImLocation className="text-green-400" />
          </p>
          <p>שלום {user.firstName}</p>
        </div>
        <Avatar img={user.social_image} rounded={true} />
      </div>
      <div>
        <LogoutButton />
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
}
