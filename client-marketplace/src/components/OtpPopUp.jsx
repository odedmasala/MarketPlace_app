import { Modal, Label, TextInput } from "flowbite-react";
import React from "react";
import { useState } from "react";
import axios from "axios";

export default function OtpPopUp({ showPopUp, show }) {
  const [phone, setPhone] = useState({});

  const getPassword = async(obj)=>{
    const {data} = await axios.post(`${process.env.REACT_APP_BASE_URL}/api/otp`,obj)
    console.log("data")
  }
  return (
    <div>
      <React.Fragment>
        <Modal show={show} size="md" popup={true} onClose={showPopUp}>
          <Modal.Header />
          <Modal.Body>
            <div className="space-y-6 px-6 pb-4 sm:pb-6 lg:px-8 xl:pb-8 text-right">
              <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                קוד חד פעמי
              </h3>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="phone" value="טלפון נייד" />
                </div>
                <TextInput required={true} onChange={(e)=> setPhone(e.target.value)} />
              </div>
              <div>
                <div className="mb-2 block">
                  <Label htmlFor="password" value="הקוד" />
                </div>
                <TextInput required={true}/>
              </div>
              <div className="w-full flex items-start">
                <button className="underline" onClick={()=>getPassword(phone)}>אימות</button>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </React.Fragment>
    </div>
  );
}
