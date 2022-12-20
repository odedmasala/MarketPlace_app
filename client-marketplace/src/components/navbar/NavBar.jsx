import React from "react";
import { Avatar, Navbar } from "flowbite-react";
import SearchInput from "../../features/searchInput/SearchInput";
import {ImLocation} from 'react-icons/im'

export default function NavBar() {
  return (
    <div className="flex justify-center bg-white">
      <Navbar
        fluid={true}
        rounded={true}
        className="md:w-3/4 w-full mx-4 md:mx-0"
      >
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={"https://i.postimg.cc/dtp2yysC/logo-removebg-preview.png"}
            className="mr-3 w-full h-14  sm:h-20"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span> */}
        </Navbar.Brand>

        <div className="flex justify-evenly md:w-3/4 items-center ">
          <SearchInput />
          {/* <div className="md:flex items-center border-2 px-4 w-7/12 justify-between hidden">
            <AiOutlineClose size={"20px"} />
            <input
              type={"text"}
              placeholder={"?מה תרצה לחפש היום"}
              className="border-none text-right"
            />
            <AiOutlineSearch size={"20px"} />
          </div> */}
          <div className="flex justify-between items-center md:w-3/12">
            <div className="flex md:flex-row flex-col-reverse justify-between w-full text-right mr-3">
              <p className="flex items-center justify-end">מודיעין <ImLocation className="text-green-400"/></p>
              <p>שלום דנה</p>
            </div>
            <Avatar
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              rounded={true}
            />
          </div>
        </div>
      </Navbar>
    </div>
  );
}
