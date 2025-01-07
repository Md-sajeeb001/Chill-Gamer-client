import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import HighestRated from "../Components/HighestRated";
import TrendingMatch from "../Components/TrendingMatch";
import Welcome from "../Components/Welcome";
import About from "../Components/About";

const Home = () => {
  const lodedData = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="container mx-auto">
        <div>
          <HighestRated lodedData={lodedData}></HighestRated>
        </div>
        <div>
          <TrendingMatch></TrendingMatch>
        </div>
        <div>
          <About></About>
        </div>
        <div className="pt-16 pb-8">
          <Welcome></Welcome>
        </div>
      </div>
    </div>
  );
};

export default Home;
