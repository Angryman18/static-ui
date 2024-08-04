import { BasicTable } from "./Table";

const RecentOrder = () => {
  return (
    <div className="w-full overflow-x-scroll lg:overflow-auto">
      <div className="bg-proper rounded-md w-[815px] p-4 font-bold text-2xl">
        Recent Orders
        <div className="my-6">
          <BasicTable />
        </div>
      </div>
    </div>
  );
};

export default RecentOrder;
