import { Footer } from "flowbite-react";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";
import { FaFacebookF } from "react-icons/fa";
import React from "react";
import axios from "axios";

import { useState } from "react";
import { useEffect } from "react";

export default function FooterContainer() {
  const [data, setData] = useState({ name: "" });
  const [image, setImage] = useState("");
  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const TransformFileData = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
      };
    } else {
      setImage("");
    }
  };
  const sandData = async () => {
    try {
      const res = await axios.post("http://localhost:6001/api/department", {
        image: image,
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
 
  return (
    <div>
      <Footer bgDark={true}>
        <div className="w-full flex flex-col items-center  bg-gray-900">
          <div className="grid w-3/4  grid-cols-2 gap-8 py-8 px-6 md:grid-cols-5">
            <div>
              <Footer.Title title="שם העסק" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">קצת עלינו</Footer.Link>
                <Footer.Link href="#">משרות</Footer.Link>
                <Footer.Link href="#">אחריות</Footer.Link>
                <Footer.Link href="#">אבטחה</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="קישורים שימושיים" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">תמיכה</Footer.Link>
                <Footer.Link href="#">אפשר לעזור?</Footer.Link>
                <Footer.Link href="#">תקשורת</Footer.Link>
                <Footer.Link href="#">דרכי התקשרות</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="בואו נעבוד יחד" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">בואו נעבוד יחד</Footer.Link>
                <Footer.Link href="#">למסעדות</Footer.Link>
                <Footer.Link href="#">לחנויות</Footer.Link>
                <Footer.Link href="#">חברות וארגונים</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="פרטים חשובים" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">שאלות ותשובות</Footer.Link>
                <Footer.Link href="#">תנאי שימוש</Footer.Link>
                <Footer.Link href="#">מדיניות פרטיות</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="אודות" />
              <Footer.LinkGroup col={true}>
                <Footer.Link href="#">בדיקה/ביטול הזמנה</Footer.Link>
                <Footer.Link href="#">צור קשר</Footer.Link>
                <Footer.Link href="#">מידע כללי</Footer.Link>
                <Footer.Link href="#">נגישות</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
          <div className="w-full flex flex-col justify-center text-center bg-gray-900 py-6 px-4">
            <div className="flex justify-center space-x-6">
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-3 ">
                <FaFacebookF size={"17px"} />
              </div>
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-3 ">
                <BsInstagram size={"17px"} />
              </div>
              <div className="text-gray-500 border-solid rounded-full border-2 border-gray-500 p-3 ">
                <HiOutlineMail size={"17px"} />
              </div>
            </div>
            <div className="text-gray-500 mt-4">
              © כל הזכויות שמורות לחברת מרקט
            </div>
          </div>
        </div>
      </Footer>
      <div>
        <input type="text" name="name"  />
        <input
          type="file"
          name="name"
          accept="image/*"
          onChange={(e) => TransformFileData(e.target.files[0])}
        />
        <button onClick={sandData}>sand</button>
      </div>
    </div>
  );
}
