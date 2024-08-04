import BasicBars from "../Chart";
import TargetMenu from "../TargetMenu";

const ChartInfoSection = () => {
  return (
    <div className="my-4 flex gap-x-4 w-full flex-col lg:flex-row gap-y-6">
      <BasicBars />
      <div className="text-white bg-proper flex-1 rounded-md">
        <TargetMenu />
      </div>
    </div>
  );
};

export default ChartInfoSection;
