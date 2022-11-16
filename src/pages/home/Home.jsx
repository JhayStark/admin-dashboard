import Charts from "../../components/charts/Charts";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetLarge from "../../components/widgets/WidgetLarge";
import WidgetSmall from "../../components/widgets/WidgetSmall";

const Home = () => {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts data={userData} title="User Analytics" dataKey="Active User" />
      <div className="homeWidgets">
        <WidgetSmall />
        <WidgetLarge />
      </div>
    </div>
  );
};

export default Home;
