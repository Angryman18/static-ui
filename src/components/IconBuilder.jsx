import { FaBasketShopping } from "react-icons/fa6";
import { FaPlusCircle } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { FaCircleCheck } from "react-icons/fa6";
import { BsFillXCircleFill } from "react-icons/bs";
import { HiCurrencyDollar } from "react-icons/hi2";
import { BiSolidUpArrowCircle } from "react-icons/bi";

const IconBuilder = () => {
  return (
    <div className="w-10 relative bg-indigo-400 bg-opacity-50 rounded-md px-2 py-1 flex justify-center">
      <div className="bg-white w-4 h-2 absolute bottom-[10px] left-3"></div>
      <FaBasketShopping className={`text-sky-500 z-10`} />
      <div className="bg-white rounded-full z-20 w-3 h-3 absolute text-sm right-2 bottom-1">
        <FaPlusCircle className="overflow-hidden text-sky-600" />
      </div>
    </div>
  );
};

const Delivered = () => {
  return (
    <div className="w-10 relative bg-green-400 bg-opacity-50 rounded-md px-2 py-1 flex justify-center">
      <div className="bg-white w-4 h-2 absolute bottom-[10px] left-3"></div>
      <GiShoppingBag className={`text-green-500 z-10`} />
      <div className="absolute right-2 bottom-1 w-4 h-4">
        <div className="relative">
          <div className="bg-white rounded-full z-10 w-3 h-3 absolute right-[2px] top-[2px] text-sm"></div>
          <FaCircleCheck className="overflow-hidden absolute z-20 text-[16px] text-green-600" />
        </div>
      </div>
    </div>
  );
};
const Cancelled = () => {
  return (
    <div className="w-10 relative bg-red-400 bg-opacity-50 rounded-md px-2 py-1 flex justify-center">
      <div className="bg-white w-4 h-2 absolute bottom-[10px] left-3"></div>
      <GiShoppingBag className={`text-red-500 z-10`} />
      <div className="absolute right-2 bottom-1 w-4 h-4">
        <div className="relative">
          <div className="bg-white rounded-full z-10 w-3 h-3 absolute right-[2px] top-[2px] text-sm"></div>
          <BsFillXCircleFill className="overflow-hidden absolute z-20 text-[16px] text-red-600" />
        </div>
      </div>
    </div>
  );
};
const Revenue = () => {
  return (
    <div className="w-10 relative bg-pink-400 bg-opacity-50 rounded-md px-2 py-1 flex justify-center">
      <div className="bg-white w-2 h-4 absolute bottom-[10px] left-[15px]"></div>
      <HiCurrencyDollar className={`text-pink-500 z-10`} />
      <div className="absolute right-2 bottom-1 w-4 h-4">
        <div className="relative">
          <div className="bg-white rounded-full z-10 w-3 h-3 absolute right-[2px] top-[2px] text-sm"></div>
          <BiSolidUpArrowCircle className="overflow-hidden absolute z-20 text-[16px] text-pink-600" />
        </div>
      </div>
    </div>
  );
};

IconBuilder.Orders = IconBuilder;
IconBuilder.Delivered = Delivered;
IconBuilder.Cancelled = Cancelled;
IconBuilder.Revenue = Revenue;
export default IconBuilder;
