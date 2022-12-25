import React, { useState } from "react";
import { Modal, Button } from "flowbite-react";
import LoginForm from "../form/LoginForm";
import RegisterForm from "../form/RegisterForm";

const LoginButton = () => {
  const [formType, setFormType] = useState("login");
  const isLogin = formType === "login";
  const isRegister = formType === "register";
  const [view, setView] = useState(false);
  const [passwordType, setPasswordType] = useState("password");
  const handelView = () => {
    setView(!view);
  };
  return (
    <>
      <div className="flex flex-wrap gap-4">
        <button
          className="mx-1 nav-list"
          onClick={() => {
            handelView();
            setFormType("login");
          }}
        >
          כניסת משתמש
        </button>
      </div>
      <Modal
        size={"2xl"}
        show={view}
        position="top-center"
        onClose={handelView}
      >
        {isLogin ? (
          <LoginForm handelView={handelView} setFormType={setFormType} />
        ) : (
          <RegisterForm handelView={handelView} setFormType={setFormType} />
        )}
      </Modal>
    </>
  );
};

export default LoginButton;
