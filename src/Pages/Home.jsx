import { useLoaderData } from "react-router-dom";
import Banner from "../Components/Banner";
import HighestRated from "../Components/HighestRated";
import TrendingMatch from "../Components/TrendingMatch";
import Welcome from "../Components/Welcome";
import About from "../Components/About";
import Blogs from "./Blogs";
import ContactMe from "../Components/ContactMe";

const Home = () => {
  const lodedData = useLoaderData();

  return (
    <div>
      <div>
        <Banner></Banner>
      </div>
      <div className="sm:container mx-auto lg:px-0 px-6">
        <div>
          <HighestRated lodedData={lodedData}></HighestRated>
        </div>
        <div>
          <TrendingMatch></TrendingMatch>
        </div>
        <div>
          <About></About>
        </div>
        <div>
          <Blogs></Blogs>
        </div>
        <div className="pt-16 pb-8">
          <Welcome></Welcome>
        </div>
        <div>
          <ContactMe></ContactMe>
        </div>
      </div>
    </div>
  );
};

export default Home;
