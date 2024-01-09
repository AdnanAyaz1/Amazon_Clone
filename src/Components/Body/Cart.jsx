import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CartFunctions } from "../Redux/Slices";
import { emptyCart } from "../../assets";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Cart = () => {
  const reduxData = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();

  if (reduxData.NoOfProducts)
    return (
      <div className="bg-gray-100 mb-[6rem] ">
        <div className="  mx-auto py-4 xl:px-24 px-4 xl:flex-row flex flex-col justify-between ">
          {/* the LEFT SIDE */}
          <div className=" bg-white xl:w-[70%]  p-4 ">
            {/* THE TOP SECTION */}
            <div className="flex justify-between items-center border-b-[1px] border-gray-700 pb-4 ">
              <h1 className="text-3xl font-bold font-titleFont">
                Shopping Cart
              </h1>
              <h3 className="text-2xl font-semibold font-bodyFont">SubTotal</h3>
            </div>
            {/* THE MAIN SECTION */}
            <div>
              {reduxData.Products.map((item) => (
                <div className="flex justify-between items-center p-4 border-b-[1px] border-gray-400 gap-16">
                  <div className="flex gap-8 items-center ">
                    <div className=" md:min-w-[15rem] md:w-[15rem] md:max-w-[15rem] md:min-h-[14rem] md:h-[14rem] md:max-h-[14rem] min-w-[10rem] w-[10rem] max-w-[10rem] min-h-[10rem] h-[10rem] max-h-[10rem] ">
                      <img
                        className=" h-full w-full object-contain hover:scale-110 duration-300 "
                        src={item.image}
                        alt=""
                      />
                    </div>

                    <div className="flex flex-col gap-1 items-start justify-between ">
                      <h1 className="md:text-xl  text-[1rem] font-semibold font-bodyFont mb-1">
                        {item.title}
                      </h1>
                      <p className="font-bodyFont text-gray-700 md:text-sm text-[0.8rem] md:h-max h-[5rem] overflow-hidden ">
                        {item.description}
                      </p>
                      <p className="md:text-[1.1rem] text-[1rem] font-semibold">
                        Unit Price: $
                        <span className="font-bold md:text-[1.1rem] text-[1rem]">
                          {item.price}
                        </span>
                      </p>
                      <div className="bg-gray-200 px-2 py-1 rounded-md my-[6px] flex items-center gap-1">
                        <span className="font-semibold">Quantity:</span>{" "}
                        <span
                          onClick={() =>
                            dispatch(
                              CartFunctions.reduceQuantity({ id: item.id })
                            )
                          }
                          className="p-[1px] bg-gray-300 mx-1 hover:bg-gray-400 rounded-sm duration-300 text-xs "
                        >
                          <RemoveIcon />
                        </span>
                        <span className="font-bold text-[1rem]">
                          {item.quantity}
                        </span>
                        <span
                          onClick={() =>
                            dispatch(
                              CartFunctions.addToCart({
                                id: item.id,
                              })
                            )
                          }
                          className="p-[1px] bg-gray-300 mx-1 hover:bg-gray-400 rounded-sm duration-300 text-xs"
                        >
                          <AddIcon></AddIcon>
                        </span>
                      </div>
                      <button
                        className="text-white bg-red-500 px-9 py-1 rounded-md font-bodyFont font-medium tracking-wider duration-300 hover:bg-red-700 text-base md:font-semibold "
                        onClick={() =>
                          dispatch(CartFunctions.deleteItem({ id: item.id }))
                        }
                      >
                        DELETE ITEM
                      </button>
                    </div>
                  </div>
                  <div>
                    <h1 className="font-bold md:text-[1.4rem]  text-[1.2rem] font-titleFont">
                      ${(item.quantity * item.price).toFixed(2)}
                    </h1>
                  </div>
                </div>
              ))}
              <div>
                <button
                  className="text-white bg-red-500 px-9 py-2 rounded-md font-bodyFont font-medium tracking-wider duration-300 hover:bg-red-700 my-4"
                  onClick={() => dispatch(CartFunctions.clearCart())}
                >
                  CLEAR CART
                </button>
              </div>
            </div>
          </div>

          {/* THE RIGHT SIDE */}
          <div className="bg-gray-100 xl:w-[20%] w-[70%] mx-auto mt-12 md:w-[50%] ">
            <div className="bg-white flex flex-col gap-3 p-4  xl:fixed xl:max-w-[20%] mr-4  ">
              <div className="flex gap-2">
                <div className="text-green-500 ">
                  <CheckCircleIcon />
                </div>
                <div>
                  <h1 className="text-base font-bodyFont">
                    Your order qualifies for FREE Shipping Choose this option at
                    checkout. See details....
                  </h1>
                  <div className="flex gap-16 mt-2">
                    <h1 className="font-semibold text-base ">TOTAL:</h1>
                    <h1 className="font-bold text-xl">
                      ${reduxData.TotalAmount}
                    </h1>
                  </div>
                </div>
              </div>

              <div>
                <button className="bg-yellow-300 w-full py-1 rounded-md font-bold hover:bg-yellow-500 hover:outline decoration-amber-600 outline-1 duration-300 text-base">
                  PROCEED TO BUY
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  else
    return (
      <div className="bg-gray-100 py-52 mb-[6rem]">
        <div className="flex items-center justify-center gap-8">
          <motion.div
            initial={{ y: 170, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            duration={{ delay: 100, duration: 100 }}
            className=""
          >
            <div className="flex gap-10">
              <div>
                <img src={emptyCart} alt="" />
              </div>
              <div className="bg-white p-4 flex flex-col gap-3 justify-center items-center max-w-md rounded-md shadow-lg">
                <div className="flex justify-center items-center flex-col">
                  <h1 className="font-black text-xl font-titleFont tracking-wide">
                    Your Cart feels lonely.
                  </h1>
                  <p className="font-bodyFont">
                    Your Shopping cart lives to serve. Give it purpose - fill it
                    with books, electronics, videos, etc. and make it happy.
                  </p>
                </div>
                <Link to="/">
                  <button className="bg-yellow-300 font-bold text-xl py-2 px-4 rounded-md hover:bg-yellow-500 duration-300">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
};

export default Cart;
