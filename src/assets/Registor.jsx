import React from 'react'
import Modal from './Modal';
import Footer from './Footer';
const signup = {
    title: "Create New Account",
    items: [
        { label: "Name", type: "text",name:'name' },
      { label: "Email or Phone Number", type: "email",name:'email' },
      { label: "Password", type: "password" , name:'password' },
      { label: "Re-Enter Password", type: "Password",name:'confirm-password' }
    ],
  };
const Registor = () => {
  return (
    <div className="h-screen bg-gray-100  flex flex-col gap-8">
    {/* BODY */}
    <div className="flex flex-col items-center justify-center max-w-[400px] mx-auto gap-4 ">
     <Modal title={signup.title} items={signup.items}></Modal>
    </div>
    <Footer></Footer>
    </div>
  )
}

export default Registor