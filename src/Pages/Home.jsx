import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import HighestRated from "../Components/HighestRated";

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
    </div>
  );
};

export default Home;
