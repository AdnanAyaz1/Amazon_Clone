import React from "react";
import { logo } from "../../assets";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SigninValidationSchema } from "../Schema/index";
import { useFormik } from "formik";
import Footer from "../../assets/Footer";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Config/Firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { ColorRing } from "react-loader-spinner";
import { useDispatch } from "react-redux";
import { CartFunctions } from "../Redux/Slices";

const Signup = () => {
  const [firebaseErr, SetError] = useState("");
  const [passError, setPass] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isTypingForPass, setTyping] = useState(false);
  const [loading, setLoading] = useState("");
  const [sucess, setSucess] = useState("");
  const dispatch = useDispatch();

  const Navigate = useNavigate();

  const handleInput = () => {
    if (firebaseErr) {
      setIsTyping(true);
    }
    if (passError) {
      setTyping(true);
    }
  };

  const initialValues = {
    email: "",
    password: "",
  };

  const handleSubmition = async (values, action) => {
    const { email, password } = values;
    setLoading(true);
    try {
     const userCredential= await signInWithEmailAndPassword(auth, email, password);
     const user = userCredential.user;
     dispatch(CartFunctions.setUser({
      id:user.id,
      displayName:user.displayName,
      email:user.email,
      photo:user.photoURL,
     }))

    } catch (error) {
      console.log(error.message);
      if (error.message === "Firebase: Error (auth/wrong-password).") {
        setPass("InVALID Password");
        setTyping(false);
        setLoading(false);
        return;
      }
      if (error.message === "Firebase: Error (auth/user-not-found).") {
        SetError("Invalid Email");
        setIsTyping(false);
        setLoading(false);
        return;
      }
    }

    setLoading(false);
    action.resetForm();
    setSucess("Login In SuccessFul");
    
    setTimeout(() => {
      Navigate("/");
    }, 3000);
  };

  const { values, errors, handleChange, handleSubmit, handleBlur, touched } =
    useFormik({
      initialValues,
      validationSchema: SigninValidationSchema,
      onSubmit: handleSubmition,
    });

  return (
    <div className="h-screen bg-gray-100  flex flex-col gap-8">
      {/* BODY */}
      <div className="flex flex-col items-center justify-center max-w-[400px] mx-auto gap-4 ">
        {/* IMAGE */}
        <Link to="/">
          <img src={logo} className="w-36 bg-black/80 mt-8 p-1" alt="" />
        </Link>
        {/* FORM */}
        <div className="w-full">
          <form
            className="flex flex-col  gap-4 border-2 p-4"
            onSubmit={handleSubmit}
          >
            <h1 className="font-titleFont text-3xl font-medium">
              Create New Account
            </h1>

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
              onInput={handleInput}
            />
            {errors.password && touched.password ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {errors.password}
              </p>
            ) : null}
            {passError && !isTypingForPass ? (
              <p className="font-bodyFont text-red-600 font-medium">
                <span className="italic font-black text-lg pr-2">!</span>
                {passError}
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
        {/* TEXT */}
        <div className="flex w-full items-center">
          <div className="w-1/3 h-[2px] bg-zinc-400"></div>
          <div className="w-1/3 text-center">
            <p>New To Amazon</p>
          </div>
          <div className="w-1/3 h-[2px] bg-zinc-400"></div>
        </div>
        {/* BUTTON */}
        <Link className="w-full" to="/registor">
          <button className="bg-gradient-to-t from-white to-zinc-200 py-1.5 w-full border border-zinc-400 rounded-md hover:bg-gradient-to-b ">
            Create Your Amazon Account
          </button>
        </Link>
      </div>

      {/* FOOTER */}
      <Footer></Footer>
    </div>
  );
};

export default Signup;
