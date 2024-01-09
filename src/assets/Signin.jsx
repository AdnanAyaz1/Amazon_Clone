import React from "react";
import Modal from "./Modal";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const signup = {
  title: "Sign In",
  items: [
    { label: "Email or Phone Number", type: "email",name:'email'},
    { label: "Password", type: "password",name:'password'},
  ],
};

const Signin = () => {
  return (
    <>
      <div className="h-screen bg-gray-100  flex flex-col gap-12">
        <div className="flex flex-col items-center justify-center max-w-[400px] mx-auto gap-4 ">
          <Modal title={signup.title} items={signup.items}></Modal>
          {/* TEXT */}
          <div className="flex w-full items-center">
            <div className="w-1/3 h-0.5 bg-zinc-400"></div>
            <div className="w-1/3 text-center">
              <p>New To Amazon</p>
            </div>
            <div className="w-1/3 h-0.5 bg-zinc-400"></div>
          </div>
          {/* BUTTON */}
          <Link className="w-full" to="/registor">
            <button className="bg-gradient-to-t from-white to-zinc-200 py-1.5 w-full border border-zinc-400 rounded-md hover:bg-gradient-to-b ">
              Create Your Amazon Account
            </button>
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Signin;
