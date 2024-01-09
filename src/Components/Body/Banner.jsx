import React, { useEffect, useState } from "react";
import { images } from "../../assets";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import { motion } from "framer-motion";

const Banner = (props) => {
  const [index, setIndex] = useState(0);
  const size = images.length;
  console.log(size);


  function moveright() {
    let newIndex;
    newIndex = index + 1;
    if (index === size - 1) {
      newIndex = 0;
    }
    setIndex(newIndex);
  }

  function moveleft() {
    let newIndex;
    newIndex = index - 1;
    if (index === 0) {
      newIndex = size - 1;
    }
    setIndex(newIndex);
  }

  let button = "p-1 h-8 w-8 rounded-full  bg-black/60 hover:bg-black/80 text-white flex items-center justify-center";
  
  function buttonClickhandler(num) {
    setIndex(num);
  }

  return (
    <motion.div className="relative"  >
     <div>
     <div >
      <img src={images[index]} alt="" />
      </div>
     </div>
      
      <div
        className="absolute top-[45%] right-[5%]  md:right-[5%]  md:top-[50%] mdl:right-24  hover:bg-black/80 hover:rounded-full hover:duration-200 "
        onClick={moveright}
      >
        {" "}
        <button className=" p-1 text-xs md:p-4  bg-black/50 text-white rounded-full ">
          <KeyboardArrowRightIcon></KeyboardArrowRightIcon>
        </button>{" "}
      </div>
      <div
        className="absolute top-[45%] left-[5%]    mdl:top-[50%]  mdl:left-24 md:left-[5%]"
        onClick={moveleft}
      >
        {" "}
        <button className=" p-1 text-xs md:p-4 bg-black/60 text-white rounded-full hover:bg-black/80 hover:rounded-full hover:duration-200">
          <KeyboardDoubleArrowLeftIcon />
        </button>{" "}
      </div>

      <div className=" hidden absolute mdl:flex gap-4 xl:top-[68%] xl:left-[42%] md:left-[36%]">
        <button className={`${button} ${index===0 ?'bg-black/90':''}`} onClick={() => buttonClickhandler(0)}>
          1
        </button>
        <button className={`${button} ${index===1 ?'bg-black/90':''}`}  onClick={() => buttonClickhandler(1)}>
          2
        </button>
        <button className={`${button} ${index===2 ?'bg-black/90':''} `}  onClick={() => buttonClickhandler(2)}>
          3
        </button>
        <button className={`${button} ${index===3 ?'bg-black/90':''}`}  onClick={() => buttonClickhandler(3)}>
          4
        </button>
        <button className={`${button} ${index===4 ?'bg-black/90':''}`}  onClick={() => buttonClickhandler(4)}>
          5
        </button>
      </div>
    </motion.div>
  );
};

export default Banner;
