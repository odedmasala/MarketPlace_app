import React from "react";
import { Sidebar, Avatar } from "flowbite-react";
import { HiInbox, HiArrowSmRight } from "react-icons/hi";
import { BsFillHouseFill, BsFillCameraFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";
import { Outlet, Link } from "react-router-dom";

export default function ProfilePage() {
  return (
    <div className="flex flex-col-reverse md:flex-row w-full md:w-3/4 bg-white mt-1 items-center m-auto">
      <div className="w-3/4">
        <Outlet />
      </div>
      <div className="">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="w-full ">
                <Avatar size="xl" rounded={true} />
                <label htmlFor="upload-profile" className="p-0">
                  <input id="upload-profile" type="file" className="hidden" />
                  <BsFillCameraFill className="text-2xl" />
                </label>
              </div>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Link to={"/profile/myOrders"}>
                <Sidebar.Item href="" icon={HiInbox} label="3">
                  ההזמנות שלי
                </Sidebar.Item>
              </Link>
              <Sidebar.Item href="#" icon={FaAddressCard}>
                מידע אישי
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={BsFillHouseFill}>
                כתובת
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                התנתקות
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
}
