import Card from "../Card";
import IconBuilder from "../IconBuilder";
import ProfitBar from "../ProfitBar";

const CardSection = () => {
  return (
    <div className="mt-6 flex flex-wrap gap-y-4 gap-x-4">
      <div className="flex flex-wrap gap-y-4 gap-x-4">
        <Card
          text="Total Orders"
          perc={3}
          totalValue="75"
          Icon={IconBuilder.Orders}
        />
        <Card
          text="Total Delivered"
          perc={-3}
          totalValue="70"
          Icon={IconBuilder.Delivered}
        />
        <Card
          text="Total Cancelled"
          perc={3}
          totalValue="05"
          Icon={IconBuilder.Cancelled}
        />
        <Card
          text="Total Revenue"
          perc={3}
          totalValue="$12k"
          Icon={IconBuilder.Revenue}
        />
      </div>
      <div className="flex-1">
        <ProfitBar />
      </div>
    </div>
  );
};

export default CardSection;
