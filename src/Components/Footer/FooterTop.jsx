import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const FooterTop = () => {
  const redux = useSelector((state) => state.CartSlice);
  const user = redux.LoginInfo;
  if (!user) {
    return (
      <div className="bg-white  flex flex-col gap-2 items-center ">
        <h1 className="text-amazon_light font-semibold">
          See Personaized Recommendations
        </h1>
        <Link to="/signin">
          <button className="hover:bg-yellow-500 font-bold text-xl px-28 py-1 rounded-md  text-center bg-yellow-300">
            Sign In
          </button>
        </Link>
        <h3 className="text-amazon_light font-semibold">
          New Customer?{" "}
          <a href="" className="text-blue-600">
            Start Here
          </a>
        </h3>
      </div>
    );
  }
};

export default FooterTop;
