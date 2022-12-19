import React from "react";
import { Sidebar,Avatar } from "flowbite-react";
import { HiInbox, HiArrowSmRight } from "react-icons/hi";
import { BsFillHouseFill, BsFillCameraFill } from "react-icons/bs";
import { FaAddressCard } from "react-icons/fa";

export default function ProfilePage() {
  return (
    <div>
      <div className="flex justify-end">
        <Sidebar aria-label="Default sidebar example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <div className="w-full ">
                <Avatar
                  size="xl"
                  rounded={true}
                />
                <label htmlFor="upload-profile" className="p-0">
                    < input id="upload-profile" type="file" className="hidden" />
                    <BsFillCameraFill className="text-2xl"/>
                </label>
              </div>
            </Sidebar.ItemGroup>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiInbox} label="3">
                ההזמנות שלי
              </Sidebar.Item>
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
