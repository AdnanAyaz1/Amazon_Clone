import React, { useState } from "react";
import { logo } from "../../assets/";
import { products } from "../Constants/constants";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import HeaderBottom from "./HeaderBottom";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../Config/Firebase";
import { signOut } from "firebase/auth";
import { CartFunctions } from "../Redux/Slices";
import { motion } from "framer-motion";

const Header = (props) => {
  const reduxdata = useSelector((state) => state.CartSlice);
  const user = reduxdata.LoginInfo;
  const dispatch = useDispatch();

  const [logout, setlogout] = useState(0);

  const [showList, setList] = useState(false);

  function dropdown() {
    setList((pre) => !pre);
  }

  // let clicked = props.val;

  // useEffect(() => {
  //   if (clicked === 0) {
  //     setList(false);
  //   }
  //   props.resetshowbar();
  // }, [clicked]);

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
    setlogout(1);
    dispatch(CartFunctions.deleteUser());
    setTimeout(() => {
      setlogout(0);
    }, 2000);
  };

  return (
    <>
      <div className="bg-amazon_blue px-8 py-2 flex gap-4 items-center justify-between text-white z-20 sticky top-0">
        {/* LOGO */}
        <Link to="/">
          <div className="w-24  headerHover">   
            <img src={logo} alt="logo image" />
          </div>
        </Link>
        {/* DELEIVER TO */}
        <div className="xl:flex gap-1 items-center headerHover hidden">
          <div>
            <LocationOnIcon />
          </div>
          <div className="flex flex-col  ">
            <p className=" p1">Delivered To</p>
            <p className="p2">Oman</p>
          </div>
        </div>

        {/* SEARCH */}
        <div className="sml:flex flex-1 relative hidden ">
          <div
            onClick={dropdown}
            className="flex gap-1 bg-slate-300 hover:bg-slate-400 rounded-tl-md rounded-bl-md items-center px-2 text-amazon_blue font-semibold cursor-pointer"
          >
            <p>All </p>
            <span>
              <ArrowDropDownIcon />
            </span>
          </div>
          {showList && (
            <div className="absolute w-56 h-80 overflow-x-hidden overflow-y-scroll bg-white top-10 border-[1px] border-black text-amazon_blue p-2 z-30 left-0">
              <ul>
                {products.map((item) => (
                  <li className="hover:cursor-pointer font-titleFont border-b-2 border-transparent hover:border-slate-400 mb-0.5 text-amazon_blue font-base">
                    <p>{item.name}</p>{" "}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className=" bg-white text-base w-full text-black px-1 py-2 ">
            <input
              type="text"
              name=""
              id=""
              className="w-full outline-none border-none h-full"
            />
          </div>
          <div className="bg-amazon_yellow hover:bg-yellow-600 text-black rounded-tr-md rounded-br-md px-2 items-center flex font-semibold  duration-100 ">
            <SearchIcon />
          </div>
        </div>
        {/* ACCOUNTS */}
        <Link to="/signin" className="headerHover hidden mdl:inline">
          {user ? (
            <p className="p2">{user.displayName}</p>
          ) : (
            <p className="p1">Hello , Sign in</p>
          )}
          <p className="p2">
            Accounts and Lists{" "}
            <span>
              <ArrowDropDownIcon />
            </span>
          </p>
        </Link>

        {/* ORDERS */}
        <div className="headerHover hidden xl:inline">
          <p className="p1">Returns</p>
          <p className="p2">& Orders</p>
        </div>

        {/* CART */}

        <Link to="/cart">
          <div className=" relative headerHover flex">
            <div className="">
              <ShoppingCartIcon />
            </div>
            <p className="p2 mt-3">Cart</p>
            <p className="absolute -top-1 right-6  p-1 h-4 rounded-full flex items-center bg-amazon_yellow  text-amazon_blue font-semibold ">
              {reduxdata.NoOfProducts}
            </p>
          </div>
        </Link>

        {/* LOGOUT */}

        {user ? (
          <div
            className="border border-white p-2 hover:cursor-pointer"
            onClick={handleLogout}
          >
            <LogoutIcon></LogoutIcon>
          </div>
        ) : null}

        {logout ? (
          <motion.p
            className="text-white p-2 bg-green-600 text-xl font-extrabold font-titleFont shadow-green-500 shadow-md flex items-center justify-center tracking-wider text-center absolute right-0"
            initial={{ y: 45, x: 200, opacity: 0 }}
            animate={{ y: 45, x: -4, opacity: 1 }}
            transition={{ duration: 0.7 }}
          >
            LOGOUT SUCCESSFUL
          </motion.p>
        ) : null}
      </div>
      <HeaderBottom></HeaderBottom>
    </>
  );
};

export default Header;
