import { IoMdArrowDropup } from "react-icons/io";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProfitBar = () => {
  return (
    <div className="text-white bg-proper w-full p-4 rounded-md xs:h-40 flex xs:flex-row flex-col justify-between">
      <div className="relative">
        <p className="text-base">Net Profit</p>
        <div className="font-bold mt-4 text-4xl">$6759.25</div>
        <div className="flex text-green-500 absolute xs:-bottom-2 xs:left-0 -bottom-0 right-0 items-center mt-auto">
          <IoMdArrowDropup />
          <p className="text-base">3%</p>
        </div>
      </div>
      <div className="xs:pt-0 pt-8 flex justify-center items-center flex-col">
        <CircularProgressbar
          value={70}
          text={`${70}%`}
          className="w-32"
          styles={buildStyles({
            pathColor: "#7393FF",
            textColor: "#fff",
            trailColor: "#2C3367",
            backgroundColor: "#7393FF",
          })}
        />
        <p className="text-xs text-center text-opacity-40 text-white pt-1">
          *The values here has been rounded off
        </p>
      </div>
    </div>
  );
};

export default ProfitBar;
