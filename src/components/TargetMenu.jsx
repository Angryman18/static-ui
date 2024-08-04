import { BiTargetLock } from "react-icons/bi";
import { IoIosArrowForward } from "react-icons/io";
import { LiaHamburgerSolid } from "react-icons/lia";
import { BiDish } from "react-icons/bi";


const TargetMenu = () => {
  return (
    <div className="mx-6 my-6 flex flex-col gap-y-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="w-16 h-16 rounded-full bg-red-400 bg-opacity-45 grid place-items-center">
            <BiTargetLock className="text-red-500" />
          </div>
          <p className="text-base">Goals</p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-[#494B4D] cursor-pointer hover:bg-opacity-80 grid place-items-center">
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="w-16 h-16 rounded-full bg-indigo-600 bg-opacity-45 grid place-items-center">
            <LiaHamburgerSolid className="text-sky-600" />
          </div>
          <p className="text-base">Goals</p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-[#494B4D] cursor-pointer hover:bg-opacity-80 grid place-items-center">
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-x-4">
          <div className="w-16 h-16 rounded-full bg-sky-400 bg-opacity-45 grid place-items-center">
            <BiDish className="text-sky-500" />
          </div>
          <p className="text-base">Goals</p>
        </div>
        <div>
          <div className="w-10 h-10 rounded-full bg-[#494B4D] cursor-pointer hover:bg-opacity-80 grid place-items-center">
            <IoIosArrowForward className="text-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TargetMenu;
