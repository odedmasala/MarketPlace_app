
import BackButton from '../../features/buttons/BackButton';

import React from "react";
import { Avatar, Navbar } from "flowbite-react";
import SearchInput from "../../features/searchInput/SearchInput";
import { ImLocation } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import NavBarUserIsConnected from "./navBarUserIsConnected/NavBarUserIsConnected";
import NavBarUserIsNotConnected from "./navBarUserIsNotConnected/NavBarUserIsNotConnected";
import cartLogo from "../../assets/images/cart-logo.png";
import { useSelector } from "react-redux";
import { getUser } from "../../redux/user/userSlice";


export default function NavBar() {
  const navigate = useNavigate();
  const user = useSelector(getUser);
  return (
    <div className="flex justify-center bg-white">
      <Navbar
        fluid={true}
        rounded={true}
        className="md:w-3/4 w-full mx-4 md:mx-0"
      >
        <Navbar.Brand
          className="w-[25%] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={cartLogo}
            className="w-1/2 lg:w-1/3 h-10  sm:h-20"
            alt="Logo"
          />
          <span className="self-center text-xl font-semibold text-[#3e8f7f] dark:text-white">
            MarketPlace
          </span>
          <span className="ml-40 md:hidden">
            <BackButton />
          </span>

        </Navbar.Brand>
        {user && user.email ? <NavBarUserIsConnected user={user} /> : <NavBarUserIsNotConnected />}
      </Navbar>
    </div>
  );
}
