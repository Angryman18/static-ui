import Layout from "./Layout";
import CardSection from "./components/sections/CardSection";
import ChartInfoSection from "./components/sections/ChartInfoSection";
import TableAndReview from "./components/sections/TableAndReview";

function App() {
  return (
    <div className="text-3xl">
      <Layout>
        <div className="text-white font-bold">Dashboard</div>
        <CardSection />
        <ChartInfoSection />
        <TableAndReview />
      </Layout>
    </div>
  );
}

export default App;
