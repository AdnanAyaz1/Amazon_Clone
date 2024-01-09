import { logo } from "../../assets";
import { Link } from "react-router-dom";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const Modal = (props) => {
  return (
    <>
      {/* IMAGE */}
      <Link to="/">
        <img src={logo} className="w-36 bg-black/80 mt-8 p-1" alt="" />
      </Link>
      <div className="w-full">
        <form action="" className="flex flex-col  gap-6 border border-zinc-400 p-4">
          <h1 className="font-titleFont text-3xl font-medium">{props.title}</h1>
          {props.items.map((item) => (
            <div className="flex flex-col w-full gap-2">
              <label htmlFor="" className="text-base font-medium">
                {item.label}
              </label>
              <input
                type={item.type}
                className="py-1.5 outline-none border border-zinc-400 px-2 focus:shadow-amazonInput focus:border-[#e77600] rounded-sm focus:bg-yellow-400/40"
              />
            </div>
          ))}
          <button
            onClick={(e) => e.preventDefault()}
            className="py-1.5  tracking-wider bg-gradient-to-t from-yellow-200 to-[#f0c14b]  rounded-md hover:bg-gradient-to-b font-medium text-[1.1rem] border-[#e77600] border duration-300 "
          >
            Continue
          </button>
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
    </>
  );
};

export default Modal;
