import { axisClasses } from "@mui/x-charts/ChartsAxis";
import { BarChart } from "@mui/x-charts/BarChart";
import { IoMdArrowDropdown } from "react-icons/io";

export default function BasicBars() {
  return (
    <div className='flex-2 overflow-x-scroll lg:overflow-auto'>
      <div className='bg-proper w-[815px] text-white rounded-md'>
        <div className='flex p-4 -mb-12 justify-between items-center'>
          <p className='text-white font-bold text-2xl'>Activity</p>
          <div className='w-20 cursor-pointer h-6 rounded-full flex items-center justify-center text-xs mr-6 bg-white bg-opacity-30'>
            Weekly
            <IoMdArrowDropdown className='text-white text-opacity-70 text-lg' />
          </div>
        </div>
        <BarChart
          xAxis={[
            {
              id: "barCategories",
              data: [
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 17, 18, 19, 20, 21, 22,
                23, 24,
              ],
              scaleType: "band",
            },
          ]}
          series={[
            {
              data: [
                6, 8, 6, 5, 12, 9, 10, 15, 2, 5, 6, 12, 7, 3, 11, 17, 16, 10, 7, 4, 14, 15, 10, 8,
                11,
              ],
            },
          ]}
          height={300}
          borderRadius={500}
          colors={["#7393FF"]}
          sx={() => ({
            [`.${axisClasses.root}`]: {
              [`.${axisClasses.tick}, .${axisClasses.line}`]: {
                stroke: "#fff",
              },
              [`.${axisClasses.tickLabel}`]: {
                fill: "#fff",
              },
            },
          })}
        />
      </div>
    </div>
  );
}
