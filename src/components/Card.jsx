import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Card = ({ text, perc, Icon, totalValue }) => {
  const IconComp = perc > 0 ? IoMdArrowDropup : IoMdArrowDropdown;
  return (
    <div className="xs:w-48 xs:h-40 w-full h-36 bg-proper relative px-2 rounded-md">
      <div className="ml-2 pt-4">
        <Icon />
      </div>
      <div className="text-sm text-white ml-1 mt-2">{text}</div>
      <div className="flex justify-between absolute items-center bottom-2 left-2 right-2">
        <div className="text-white text-3xl font-bold">{totalValue}</div>
        <div
          className={`${
            perc > 0 ? "text-green-600" : "text-red-600"
          } text-sm font-bold flex justify-center items-center`}
        >
          <IconComp size={24} />
          <p className="text-base">{Math.abs(perc)}%</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
