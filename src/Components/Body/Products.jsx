import { useLoaderData } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import StartIcon from "@mui/icons-material/Start";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { CartFunctions } from "../Redux/Slices";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

const Products = () => {
  const reduxdata = useSelector((state) => state.CartSlice);
  const dispatch = useDispatch();
  console.log("This is Products", reduxdata.Products);

  const data = useLoaderData();
  const products = data.data;

  return (
    <>
      <div className="bg-gray-100 w-[95%] mx-auto  grid grid-col-1 md:grid-cols-2 mdl:grid-cols-3  xl:grid-cols-4 xl:gap-10 md:gap-6 gap-10 px-8 mb-[6rem]">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white px-4 sml:max-w-[85%] sml:mx-auto sml:gap-10 md:max-w-[100%] md:px-4 py-4 md:py-8 relative h-auto rounded-md flex flex-col gap-6 md:gap-12 mt-2 border-[1px] hover:shadow-2xl "
          >
            <span className="absolute top-2 right-2 text-gray-500  text-xs sml:text-base md:text-base font-medium  capitalize italic">
              {item.category}
            </span>
            <div className=" pt-6 md:pt-8 relative overflow-y-hidden">
              <div className="group">
                <img
                  className="  w-36 h-48 sml:w-40 sml:h-52 md:w-52 md:h-64 object-contain mx-auto"
                  src={item.image}
                  alt=""
                />

                <div className="bg-gray-100 flex flex-col gap-1 md:gap-2 md:py-6 py-4 absolute  w-full text-xs sml:text-base md:text-lg hover:font-bold -bottom-[200px]  group-hover:bottom-0  duration-700">
                  <div className="imagedetails ">
                    <h2 className="imagedetailsh2">Add to Cart</h2>
                    <ShoppingCartIcon />
                  </div>
                  <div className="imagedetails">
                    <h2 className="imagedetailsh2">Compare</h2>
                    <CompareArrowsIcon />
                  </div>
                  <div className="imagedetails">
                    <h2 className="imagedetailsh2">See Details</h2>
                    <StartIcon />
                  </div>
                  <div className="imagedetails">
                    <h2 className="imagedetailsh2">Add to Wishlist</h2>
                    <FavoriteIcon />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:gap-3 gap-2 ">
              <div className="flex justify-between px-4">
                <h2 className="font-titleFont tracking-wide text-base sml:text-xl md:text-xl text-amazon_blue font-bold">
                  {item.title.substring(0, 15)}
                </h2>
                <p className="text-gray-500 font-bold text-base sml:text-xl">
                  ${item.price}
                </p>
              </div>
              <div className="px-4">
                <p className="text-gray-600 font-medium text-xs sml:text-base">
                  {item.description.substring(0, 70)}...
                </p>
              </div>
              <div className="px-4 text-yellow-500 ">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
              <div>
                <button
                  className="py-1.5 flex items-center justify-center  w-full rounded-md font-semibold text-sm  sml:text-xl  tracking-wide bg-gradient-to-t from-yellow-200 to-[#f0c14b] hover:bg-gradient-to-b   border-[#e77600] border "
                  onClick={() =>
                    dispatch(
                      CartFunctions.addToCart({
                        title: item.title,
                        description: item.description,
                        price: item.price,
                        id: item.id,
                        image: item.image,
                        quantity: 1,
                      })
                    )
                  }
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
