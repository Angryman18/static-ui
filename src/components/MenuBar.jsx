import { BiSolidHome, BiBarChartSquare } from "react-icons/bi";
import { HiOutlineClipboardCheck } from "react-icons/hi";
import { CiWallet } from "react-icons/ci";
import { BsHandbag } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

const MenuBar = () => {
  return (
    <div className="bg-proper xs:w-16 w-10 fixed top-15 left-0 h-screen z-10 text-[#A1A2A9]">
      <div className="mt-4 flex flex-col xs:gap-y-10 gap-y-6">
        <div className="flex justify-center relative items-center hover:bg-opacity-60 cursor-pointer">
          <BiSolidHome className="text-[#7B92FD] xs:text-3xl text-2xl" />
          <div className="w-[2px] xs:h-8 h-7 bg-[#7B92FD] absolute -top-[2px] left-0"></div>
        </div>
        <div className="flex justify-center relative items-center hover:bg-opacity-60 cursor-pointer">
          <BiBarChartSquare className="xs:text-3xl text-2xl" />
        </div>
        <div className="flex justify-center relative items-center hover:bg-opacity-60 cursor-pointer">
          <HiOutlineClipboardCheck className="xs:text-3xl text-2xl" />
        </div>
        <div className="flex justify-center relative items-center hover:bg-opacity-60 cursor-pointer">
          <CiWallet className="xs:text-3xl text-2xl" />
        </div>
        <div className="flex justify-center relative items-center hover:bg-opacity-60 cursor-pointer">
          <BsHandbag className="xs:text-3xl text-2xl" />
        </div>
      </div>
      <div className="mt-auto absolute bottom-24 xs:left-4 left-2">
        <div className="flex mt-auto justify-center relative items-center hover:bg-opacity-60 cursor-pointer">
          <IoExitOutline className="xs:text-3xl text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
