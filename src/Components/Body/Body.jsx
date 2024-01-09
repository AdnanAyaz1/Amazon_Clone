import React from "react";
import Banner from "./Banner";
import Products from "./Products";

const Body = () => {
  return (
    <>
      <Banner />
      <div className="md:-mt-[2rem] mdl:-mt-[3rem] sml:-mt-[1rem] xl:-mt-[5rem] -mt-[1rem] w-full bg-gray-100">
        <Products />
      </div>
    </>
  );
};

export default Body;
