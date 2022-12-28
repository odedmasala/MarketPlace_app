import React, { useEffect, useState } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Modal, Select, Button, Spinner } from "flowbite-react";
import { MdEmail } from "react-icons/md";
import { GrFormClose } from "react-icons/gr";
import { BsFillLockFill } from "react-icons/bs";
import {
  AiFillPhone,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import SocialButton from "./SocialButton";
import LoginForm from "./LoginForm";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setUser } from "../../../redux/user/userSlice";

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,}$/;
const phoneRegex = /^(\+972|0)(-|\s)?\d{2}(-|\s)?\d{7}$/;

const registerSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "שם קצר מידי")
    .max(20, "שם ארוך מידי")
    .required("הזן שם פרטי"),
  lastName: Yup.string()
    .min(2, "שם קצר מידי")
    .max(20, "שם ארוך מידי")
    .required("הזן שם משפחה"),
  email: Yup.string()
    .matches(emailRegex, "אימייל לא תקין")
    .required(`הזן כתובת דו"אל`),
  phone: Yup.string()
    .matches(phoneRegex, `אנה הזן מספר פלאפון מקומי`)
    .required(`אנה הזן מספר פלאפון`),
  password: Yup.string()
    .matches(
      passwordRegex,
      "סיסמא חייבת לכולל: 8 תווים, אות גדולה, אות קטנה, ספרה אחת ואחת מהתווים הללו  (!, @, #, $, %, ^, &, *, (, ), _, +, -, =)"
    )
    .required("הקש סיסמא"),
  passwordVerification: Yup.string()
    .oneOf([Yup.ref("password"), null], "סיסמא לא תואמת")
    .required("אמת סיסמא"),
});
const registerFormValues = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  password: "",
  passwordVerification: "",
};

const RegisterForm = ({ handelView, setFormType }) => {
  const [passwordType, setPasswordType] = useState("password");
  const [Succeeded, setSucceeded] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const register = async (user) => {
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/register`,
        { user: user },
        { withCredentials: true }
      );
      setSucceeded(data);
      return data;
    } catch (e) {
      setError(e.response.data);
    }
  };
  const navigateUser = async (values) => {
    try {
      const sendData = { email: values.email, password: values.password };
      const { data } = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/api/auth/login`,
        sendData,
        { withCredentials: true }
      );
      if (data) {
        dispatch(setUser(data));
        setSucceeded(data);
        return data;
      }
    } catch (e) {
      setError(e);
    }
  };

  const handleNewUser = async (values, onSubmitProps) => {
    try {
      setLoading(true);
      const checkIfRegister = await register(values, onSubmitProps);
      if (checkIfRegister?.create) {
        setTimeout(async () => {
          let Succeeded = null;
          Succeeded = await navigateUser(values);
          if (Succeeded) {
            handelView();
            onSubmitProps.resetForm();
            setLoading(false);
            window.location.reload();
          }
        }, 2000);
      }
    } catch (e) {
      setLoading(false);
      return setError(e);
    }
  };
  const handleFormSubmit = (values, onSubmitProps) => {
    handleNewUser(values, onSubmitProps);
  };
  useEffect(() => {
    setLoading(false);
  }, [error]);

  return (
    <Formik
      onSubmit={handleFormSubmit}
      initialValues={registerFormValues}
      validationSchema={registerSchema}
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
              <img
                src={
                  "https://images.pexels.com/photos/5632382/pexels-photo-5632382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                }
                alt=""
                className="w-full h-full"
              />
            </div>
            <div className="p-3">
              <div className="flex justify-end text-end hover:cursor-pointer">
                <GrFormClose
                  onClick={() => {
                    handelView();
                    resetForm();
                    setError(null);
                  }}
                />
              </div>
              <Form>
                <div>
                  <p className="text-2xl text-center">הירשם עכשיו</p>
                  <p className="text-sm text-center mb-2">
                    ותוכל להנות משלל חנויות בוטיק בלחיצת כפתור
                  </p>
                  <div className="flex justify-center items-center">
                    <div className="flex justify-center flex-col w-10/12">
                      <div className="flex justify-between">
                        <div className="w-6/12 mr-4 flex flex-row-reverse items-center border-b-4 border-blue-900  focus-within:border-blue-200">
                          <MdEmail className="text-sm w-2/12 " />
                          <Field
                            onBlur={handleBlur}
                            value={values.lastName}
                            onChange={handleChange}
                            name="lastName"
                            type="text"
                            className="w-10/12 p-1 focus:shadow-shadowForm outline-none text-center border-none"
                            placeholder={`שם משפחה`}
                          />
                        </div>
                        <div className=" w-5/12  flex flex-row-reverse  items-center border-b-4 border-blue-900 focus-within:border-blue-200">
                          <MdEmail className="text-sm w-2/12 " />
                          <Field
                            onBlur={handleBlur}
                            value={values.firstName}
                            onChange={handleChange}
                            name="firstName"
                            type="text"
                            className="w-10/12 focus:shadow-shadowForm outline-none text-center border-none"
                            placeholder={`שם פרטי`}
                          />
                        </div>
                      </div>
                      <>
                        <div className="flex justify-end gap-28 md:gap-20">
                          {errors.lastName && touched.lastName ? (
                            <div className="text-xs text-end text-red-600">
                              {errors.lastName}
                            </div>
                          ) : null}
                          {errors.firstName && touched.firstName ? (
                            <div className="text-xs text-end text-red-600">
                              {errors.firstName}
                            </div>
                          ) : null}
                        </div>
                      </>
                      <div className="flex flex-row-reverse items-center mt-2 border-b-4 border-blue-900  focus-within:border-blue-200">
                        <MdEmail className="text-xl" />
                        <Field
                          onBlur={handleBlur}
                          value={values.email}
                          onChange={handleChange}
                          name="email"
                          type="email"
                          className="w-10/12 focus:shadow-shadowForm outline-none text-center border-none"
                          placeholder={`הזן כתובת דוא"ל `}
                        />
                      </div>
                      {errors.email && touched.email ? (
                        <div className="text-xs text-center text-red-600">
                          {errors.email}
                        </div>
                      ) : null}
                      <div className="flex flex-row-reverse items-center mt-2 border-b-4 border-blue-900 focus-within:border-blue-200">
                        <AiFillPhone className="text-xl" />
                        <Field
                          onBlur={handleBlur}
                          value={values.phone}
                          onChange={handleChange}
                          name="phone"
                          type="text"
                          className="w-10/12 focus:shadow-shadowForm outline-none text-center border-none"
                          placeholder={`הזן מספר פלאפון`}
                        />
                      </div>
                      {errors.phone && touched.phone ? (
                        <div className="text-xs text-center text-red-600">
                          {errors.phone}
                        </div>
                      ) : null}
                      <div className="flex flex-row-reverse items-center mt-2 border-b-4 border-blue-900  focus-within:border-blue-200">
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
                          onBlur={handleBlur}
                          value={values.password}
                          onChange={handleChange}
                          name="password"
                          type={passwordType}
                          className="w-10/12 focus:shadow-shadowForm outline-none text-center border-none"
                          placeholder={`הזן סיסמא`}
                        />
                      </div>
                      {errors.password && touched.password ? (
                        <div className="text-xs text-center text-red-600">
                          {errors.password}
                        </div>
                      ) : null}
                      <div className="flex flex-row-reverse items-center mt-2 justify-center border-b-4 border-blue-900  focus-within:border-blue-200">
                        <Field
                          name="passwordVerification"
                          type={passwordType}
                          className="w-10/12 focus:shadow-shadowForm outline-none text-center border-none"
                          placeholder={`אימות סיסמא`}
                        />
                      </div>
                      {errors.passwordVerification &&
                      touched.passwordVerification ? (
                        <div className="text-xs text-center text-red-600">
                          {errors.passwordVerification}
                        </div>
                      ) : null}
                      {loading ? (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                          }}
                          className="mb-2 mt-2 border-2 border-blue-600 bg-blue-600 text-white  transform active:scale-y-75 transition-transform"
                        >
                          <Spinner aria-label="Spinner button example" />
                          <span className="pl-3">Loading...</span>
                        </button>
                      ) : (
                        <button
                          type="submit"
                          onClick={handleSubmit}
                          className="mb-2 mt-2 border-2 border-blue-600 bg-[white] text-blue-700 hover:text-white hover:bg-blue-600  transform active:scale-y-75 transition-transform"
                        >
                          הירשם
                        </button>
                      )}
                      {error?.response?.data?.status == 406 ? (
                        <>
                          <div className="text-center text text-red-600">
                            {`משתמש קיים כבר במערכת, אנא התחבר כרגיל`}
                          </div>
                        </>
                      ) : null}
                      <p className="text-center mb-5">
                        רשום כבר ?
                        <span
                          onClick={() => {
                            setFormType("login");
                            resetForm(values);
                            setFieldValue();
                          }}
                          className="text-blue-500 underline cursor-pointer"
                        >
                          היכנס עכשיו
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};
export default RegisterForm;
