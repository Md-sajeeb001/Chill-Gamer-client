import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import HighestRated from "../Components/HighestRated";
import TrendingMatch from "../Components/TrendingMatch";
import Welcome from "../Components/Welcome";

const Home = () => {
  const lodedData = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div>
        <HighestRated lodedData={lodedData}></HighestRated>
      </div>
      <div>
        <TrendingMatch></TrendingMatch>
      </div>
      <div className="pt-16 pb-8">
        <Welcome></Welcome>
      </div>
    </div>
  );
};

export default Home;
