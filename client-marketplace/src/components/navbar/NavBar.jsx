import React from "react";
import { Avatar, Navbar, TextInput } from "flowbite-react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  return (
    <div className="flex justify-center">
      <Navbar fluid={true} rounded={true} className="w-3/4">
        <Navbar.Brand href="https://flowbite.com/">
          <img
            src={'https://i.postimg.cc/dtp2yysC/logo-removebg-preview.png'}
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite Logo"
          />
          {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Flowbite
          </span> */}
        </Navbar.Brand>

        <div className="md:flex justify-evenly w-3/4 items-center hidden">
          <div className="flex items-center border-2 px-4 w-7/12 justify-between">
            <AiOutlineClose size={'20px'}/>
            <input type={'text'} placeholder={"?מה תרצה לחפש היום"} className="border-none text-right"/>
            <AiOutlineSearch size={'20px'}/>
          </div>
          <p>מודיעין</p>
          <p>שלום דנה</p>
          <Avatar
            img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
            rounded={true}
          />
        </div>
        <div className="hidden">
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Navbar.Link href="/navbars" active={true}>
              Home
            </Navbar.Link>
            <Navbar.Link href="/navbars">About</Navbar.Link>
            <Navbar.Link href="/navbars">Services</Navbar.Link>
            <Navbar.Link href="/navbars">Pricing</Navbar.Link>
            <Navbar.Link href="/navbars">Contact</Navbar.Link>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}
