import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { ListItems } from "../Constants/ListItems";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { motion } from "framer-motion";
import React from "react";
import { useSelector } from "react-redux";

const HeaderBottom = () => {

  const redux = useSelector((state)=>state.CartSlice)
  const user = redux.LoginInfo;

  const [showbar, setbar] = useState(false);

  function sidebar() {
    setbar(true);
  }

  function hidebar() {
    setbar(false);
  }

  const siderbarItems = ListItems.map((item) => (
    <li className="flex flex-col gap-4 px-8">
      <p className="text-xl  font-bold font-titleFont">{item.title}</p>
      <ul className="flex flex-col gap-1   font-semibold ">
        <li className="sidebarlist ">
          {item.items[0]}{" "}
          <span>
            <ChevronRightIcon />
          </span>
        </li>
        <li className="sidebarlist">
          {item.items[1]}{" "}
          <span>
            <ChevronRightIcon />
          </span>
        </li>
        <li className="sidebarlist">
          {item.items[2]}{" "}
          <span>
            <ChevronRightIcon />
          </span>
        </li>
      </ul>
      <hr className="h-0.5 bg-slate-600 my-4" />
    </li>
  ));
  return (
    <>
      <div className="bg-amazon_light px-8 py-2  items-center justify-between text-white sticky top-[6%] z-10 ">
        <ul className="flex gap-4 items-center font-semibold">
          <li
            className="headerHover flex gap-1 items-center cursor-pointer"
            onClick={sidebar}
          >
            <span>
              <MenuIcon />
            </span>{" "}
            All
          </li>
          <li className="headerHover hidden sml:inline">Todays Deals</li>
          <li className="headerHover hidden sml:inline">Customer's Service</li>
          <li className="headerHover hidden sml:inline">Gift Cards</li>
          <li className="headerHover hidden sml:inline">Registory</li>
          <li className="headerHover hidden sml:inline">Sell</li>
        </ul>
      </div>
      {showbar && (
        <div
          className=" fixed  bg-black/30 left-0 right-0 top-0 bottom-0  z-30"
          onClick={hidebar}
        >
          <div className="relative ">
            <motion.div
              initial={{ x: -500, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="fixed  w-[80%] mdl:w-[40%]  xl:w-[22%] h-[100%] bg-white z-30 border-black border-[1px] text-amazon_blue overflow-y-scroll ">
                <div className="z-30">
                  <div className="flex gap-2 bg-amazon_light text-white p-4 mb-8 text-xl font-bold items-center">
                    <AccountCircleIcon />
                    {user?<p>{user.displayName}</p>:<p>Hello , Sign in</p>}
                    
                  </div>
                  <div>
                    <ul>{siderbarItems}</ul>
                  </div>
                </div>
              </div>

              <div
                className="absolute  left-[82%]  mdl:left-[40.5%] xl:left-[22.3%] top-0.5 bg-slate-200 z-30 p-2 hover:bg-slate-400 hover:text-violet"
                onClick={hidebar}
              >
                <CloseIcon />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderBottom;
