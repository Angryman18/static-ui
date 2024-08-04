import userIcon from "@/assets/user.jpg";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { GoGear, GoBell } from "react-icons/go";
import { CiSearch } from "react-icons/ci";

const Action = () => {
  return (
    <div className="ml-auto">
      <div className="flex xs:gap-4 gap-2">
        <div className="bg-[#44464A] xs:hidden cursor-pointer hover:bg-opacity-80 duration-75 w-10 h-10 rounded-full grid place-items-center">
          <CiSearch size="24px" />
        </div>
        <div className="bg-[#44464A] cursor-pointer hover:bg-opacity-80 duration-75 w-10 h-10 rounded-full grid place-items-center">
          <HiOutlineEnvelope size="24px" />
        </div>
        <div className="bg-[#44464A] cursor-pointer hover:bg-opacity-80 duration-75 w-10 h-10 rounded-full grid place-items-center">
          <GoGear size="24px" />
        </div>
        <div className="bg-[#44464A] cursor-pointer hover:bg-opacity-80 duration-75 w-10 h-10 rounded-full grid place-items-center">
          <GoBell size="24px" />
        </div>
        <div className="w-10 h-10 cursor-pointer  rounded-full grid place-items-center">
          <img
            src={userIcon}
            className="rounded-full aspect-square"
            alt="profile_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Action;
