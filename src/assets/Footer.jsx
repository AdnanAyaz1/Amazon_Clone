import React from 'react'

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-zinc-300 via-white to-white flex-1 py-4 ">
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-4 p-4">
            <h1 className="text-blue-600 hover:underline underline-offset-2 hover:text-orange-600 cursor-pointer">COnditions</h1>
            <h1 className="text-blue-600 hover:underline underline-offset-2 hover:text-orange-600 cursor-pointer">Privacy Policy</h1>
            <h1 className="text-blue-600 hover:underline underline-offset-2 hover:text-orange-600 cursor-pointer">Terms OF USe</h1>
          </div>
          <div>
            <p className="text-sm text-gray-700 font-bodyFont tracking-wide">© 1996-2023, ReactBd.com, Inc. or its affiliates</p>
          </div>
        </div>
        </div>
  )
}

export default Footer