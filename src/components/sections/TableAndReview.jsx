import CustomerReview from "../CustomerReview";
import RecentOrder from "../RecentOrder";

const TableAndReview = () => {
  return (
    <div className="text-white flex w-full lg:flex-row flex-col gap-x-4">
      <div className="flex flex-2">
        <RecentOrder />
      </div>
      <div className="flex-1 bg-proper rounded-md box-border p-4">
        <CustomerReview />
      </div>
    </div>
  );
};

export default TableAndReview;
