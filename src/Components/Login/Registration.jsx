import { logo } from "../../assets";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import React, { useEffect, useState } from "react";
import { Form, useFormik } from "formik";
import { RegistorValidationSchema } from "../Schema";
import Footer from "../../assets/Footer";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [firebaseErr, SetError] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [loading, setLoading] = useState("");
  const [sucess, setSucess] = useState("");
  
  const Navigate = useNavigate();

  const handleInput = () => {
    if (firebaseErr) {
      setIsTyping(true);
    }
  };

  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const handleReg = async (values, action) => {
    const { name, email, password } = values;
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      updateProfile(auth.currentUser, {
        displayName: name,
      });
    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/email-already-in-use)." ) {
        SetError("INCORRECT EMAIL OR PASSWORD");
        setLoading(false);
        return;
      }
      
    }
    setLoading(false);
    setSucess("Registration SuccessFul");
    setTimeout(()=>{
      Navigate('/signin')
    },3000);
    action.resetForm();
  };

  const { values, errors, handleChange, handleBlur, handleSubmit, touched } =
    useFormik({
      initialValues,
      validationSchema: RegistorValidationSchema,
      onSubmit: handleReg,
    });

   

  return (
    <div className="h-screen bg-gray-100  flex flex-col gap-8">
      {/* BODY */}
      <div className="flex flex-col items-center justify-center max-w-[400px] mx-auto gap-4 ">
        {/* IMAGE */}
        <Link to="/">
          <img src={logo} className="w-36 bg-black/80 mt-8 p-1" alt="" />
        </Link>
        <div className="w-full">
          <form
            className="flex flex-col  gap-4 border-2 p-4"
            onSubmit={handleSubmit}
          >
            <h1 className="font-titleFont text-3xl font-medium">Create New Account</h1>
            <label htmlFor="" className="text-base font-medium">
              Name
            </label>
            <input
              type="text"
              className={`${"py-1.5 outline-none border border-zinc-400 px-2 focus:shadow-amazonInput focus:border-[#e77600] focus-within:bg-yellow-200/50}"}`}
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {errors.name}
              </p>
            ) : null}

            <label htmlFor="" className="text-base font-medium">
              Email or Phone
            </label>
            <input
              type="text"
              className={`${"py-1.5 outline-none border border-zinc-400 px-2 focus:shadow-amazonInput focus:border-[#e77600] focus-within:bg-yellow-200/50}"}  `}
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              onInput={handleInput}
            />
            {errors.email && touched.email ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {errors.email}
              </p>
            ) : null}
            {firebaseErr && !isTyping ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {firebaseErr}
              </p>
            ) : null}
            <label htmlFor="" className="text-base font-medium">
              Password
            </label>
            <input
              type="password"
              className={`${"py-1.5 outline-none border border-zinc-400 px-2 focus:shadow-amazonInput focus:border-[#e77600] focus-within:bg-yellow-200/50}"}  `}
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {errors.password}
              </p>
            ) : null}
            <label htmlFor="" className="text-base font-medium">
              Confirm Password
            </label>
            <input
              type="text"
              className={`${"py-1.5 outline-none border border-zinc-400 px-2 focus:shadow-amazonInput focus:border-[#e77600] focus:bg-yellow-200/50}"}  `}
              name="confirm_password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirm_password}
            />
            {errors.confirm_password && touched.confirm_password ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {errors.confirm_password}
              </p>
            ) : null}
            <button
              type="submit"
              className="py-1.5  tracking-wide bg-gradient-to-t from-yellow-200 to-[#f0c14b] active:bg-yellow-600 rounded-md hover:bg-gradient-to-b font-medium text-base border-[#e77600] border "
            >
              Continue
            </button>
            {loading ? (
              <div className="mx-auto">
                <ColorRing
                  visible={true}
                  height="80"
                  width="80"
                  ariaLabel="blocks-loading"
                  wrapperStyle={{}}
                  wrapperClass="blocks-wrapper"
                  colors={[
                    "#e15b64",
                    "#f47e60",
                    "#f8b26a",
                    "#abbd81",
                    "#849b87",
                  ]}
                />
              </div>
            ) : null}
            {sucess ? (
              <div>
                <motion.p
                  initial={{ y: 70, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-500 font-bold font-bodyFont text-xl text-center border-green-600 border py-1"
                >
                  {sucess}
                </motion.p>
              </div>
            ) : null}
            <p className="text-sm text-gray-900 ">
              By Continuing, you agree to Amazon's{" "}
              <span className="text-blue-600">
                {" "}
                Conditions of Use and Privace Notice.
              </span>
            </p>
            <p className="text-sm group">
              <ArrowRightIcon></ArrowRightIcon>{" "}
              <span className="text-blue-600 group-hover:underline underline-offset-2 group-hover:text-orange-600 cursor-pointer">
                Need Help?
              </span>
            </p>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Registration;
