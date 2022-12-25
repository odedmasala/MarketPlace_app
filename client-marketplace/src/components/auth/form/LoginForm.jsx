import React, { useEffect, useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Modal, Select, Button } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { BsFillLockFill } from "react-icons/bs";
import {
  AiFillPhone,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import SocialButton from "./SocialButton";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex =
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .matches(emailRegex, "אימייל לא תקין")
    .required("אנה הזן כתובת אימייל"),
  password: Yup.string()
    .matches(
      passwordRegex,
      "סיסמא חייבת לכולל: 8 תווים, אות גדולה, אות קטנה, ספרה אחת ואחת מהתווים הללו  (!, @, #, $, %, ^, &, *, (, ), _, +, -, =)"
    )
    .required("הקש סיסמא"),
});
const loginFormValues = { email: "", password: "" };
const LoginForm = ({ handelView, setFormType }) => {
  const [passwordType, setPasswordType] = useState("password");
  const handleFormSubmit = (values, onSubmitProps) => {
    // same shape as initial values
    console.log(values, onSubmitProps);
  };
  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={loginFormValues}
      validationSchema={SignInSchema}
    >
      {({
        values,
        errors,
        touched,
        handleBlur,
        handleChange,
        handleSubmit,
        setFieldValue,
        resetForm,
      }) => (
        <div className="grid grid-cols-1 border rounded-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 row-span-3">
            <div className="hidden md:flex h-full shadow-2xl">
              <img src={'https://images.pexels.com/photos/9016541/pexels-photo-9016541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'} alt="" className="w-full h-full" />
            </div>
            <div className="p-3">
              <div className="flex justify-end text-end hover:cursor-pointer">
                <GrFormClose onClick={handelView} />
              </div>
              <Form>
                <>
                  <div>
                    <p className="text-2xl text-center">כניסה</p>
                    <p className="text-sm text-center">
                      התחבר באמצעות דוא"ל וסיסמה
                    </p>
                    <div className="flex justify-center items-center">
                      <div className="flex justify-center flex-col w-9/12">
                        <div className="flex flex-row-reverse items-center border-b-4 border-blue-900 mb-3 mt-5 focus-within:border-blue-200">
                          <MdEmail className="text-xl" />
                          <Field
                            name="email"
                            type="email"
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                            className="w-10/12 focus:shadow-shadowForm outline-none text-end border-none"
                            placeholder={`הזן את כתובת הדו"אל `}
                          />
                        </div>
                        {errors.email && touched.email ? (
                          <div className="text-xs text-end text-red-600">
                            {errors.email}
                          </div>
                        ) : null}
                        <div className="flex flex-row-reverse items-center border-b-4 border-blue-900 mt-5 focus-within:border-blue-200">
                        {passwordType === "password" ? (
                          <AiOutlineEye
                            onClick={() => {
                              setPasswordType("text");
                            }}
                            className="text-xl cursor-pointer"
                          />
                        ) : (
                          <AiOutlineEyeInvisible
                            onClick={() => {
                              setPasswordType("password");
                            }}
                            className="text-xl cursor-pointer"
                          />
                        )}
                          <Field
                            type={passwordType}
                            name="password"
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                            className="w-10/12 focus:shadow-shadowForm outline-none text-end border-none"
                            placeholder={`הזן את הסיסמא שלך`}
                          />
                        </div>
                        {errors.password && touched.password ? (
                          <div className="text-xs text-end text-red-600">
                            {errors.password}
                          </div>
                        ) : null}
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="mb-2 mt-2  border-2 border-blue-600 bg-[white] text-blue-700 hover:text-white hover:bg-blue-600  transform active:scale-y-75 transition-transform"
                        >
                          התחבר
                        </button>
                        <div className="flex justify-center items-center mb-2">
                          <div className="border border-b-2 border-blue-900 w-4/12"></div>
                          <p className="w-1/12 text-center">או</p>
                          <div className="border border-b-2 border-blue-900 w-4/12"></div>
                        </div>
                        <SocialButton />
                        <p className="text-center mb-5">
                          אין לך חשבון?{" "}
                          <span
                            onClick={() => {
                              setFormType("register");
                              resetForm();
                            }}
                            className="text-blue-500 underline cursor-pointer"
                          >
                            הירשם
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default LoginForm;
