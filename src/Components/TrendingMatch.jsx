import { Typewriter } from "react-simple-typewriter";
import team1 from "../assets/icons/team1-banner.png";
import team2 from "../assets/icons/team2-banner.png";
import team3 from "../assets/icons/team3-banner.png";
import team4 from "../assets/icons/team4-banner.png";
import team5 from "../assets/icons/team5-banner.png";
import team6 from "../assets/icons/team6-banner.png";
import vs from "../assets/icons/vs_dark.png";
import { MdOutlineLiveTv } from "react-icons/md";
import { Link } from "react-router-dom";

const TrendingMatch = () => {
  return (
    <div className="lg:py-10 md:py-4">
      <h2 className="text-3xl font-bold text-center underline">
        <Typewriter
          words={["TRENDING MATCHES"]}
          loop={5}
          cursor
          cursorStyle="_"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1000}
        />
      </h2>
      <div
        className="sm:border-none border sm:p-0 p-5 
       sm:rounded-xl rounded-xl sm:shadow-none shadow-xl sm:bg-none sm:space-y-20 space-y-8 mt-16 pb-6"
      >
        <div className=" sm:flex sm:mx-0 mx-auto sm:items-center justify-between space-y-8 sm:space-y-0 sm:bg-transparent bg-white sm:p-0 p-4 sm:rounded-none rounded-xl">
          <div className="flex justify-between sm:justify-normal items-center gap-3  sm:w-1/3 w-full ">
            <img className="w-20" src={team1} alt="" />
            <img className="w-10 h-10 my-auto" src={vs} alt="" />
            <img className="w-20" src={team2} alt="" />
          </div>
          <div className=" divider divider-horizontal"></div>
          <div className="space-x-2 text-center sm:w-1/3 w-full">
            <span className="bg-black text-white text-sm px-4 py-2">
              All Match
            </span>
            <span className="bg-black text-white text-sm px-4 py-2">
              Up Comning Match
            </span>
            <h2 className="font-bold md:text-2xl lg:text-4xl pt-4">
              NECOROMENCY FIGHT
            </h2>
          </div>
          <Link
            to="https://www.twitch.tv"
            className="flex items-center justify-center gap-3 sm:w-1/3 w-full "
          >
            <MdOutlineLiveTv className="text-2xl"></MdOutlineLiveTv>
            <h2>watch stream</h2>
          </Link>
        </div>

        <div className="sm:flex sm:mx-0 mx-auto justify-between space-y-8 sm:space-y-0 sm:bg-transparent bg-white sm:p-0 p-4 sm:rounded-none rounded-xl">
          <div className="  sm:w-1/3 w-full  flex justify-between sm:justify-normal items-center gap-3">
            <img className="w-20" src={team3} alt="" />
            <img className="w-10 h-10 my-auto" src={vs} alt="" />
            <img className="w-20" src={team4} alt="" />
          </div>
          <div className="divider divider-horizontal"></div>
          <div className="  sm:w-1/3 w-full  space-x-4 text-center">
            <span className="bg-black text-white text-sm px-6 py-2">
              All Match
            </span>
            <span className="bg-black text-white text-sm px-6 py-2">
              Up Comning Match
            </span>
            <h2 className="font-bold md:text-2xl lg:text-4xl pt-4">
              LEGENDARY BATTEL
            </h2>
          </div>
          <Link
            to="https://www.twitch.tv"
            className="flex items-center justify-center gap-3 sm:w-1/3 w-full "
          >
            <MdOutlineLiveTv className="text-2xl"></MdOutlineLiveTv>
            <h2>watch stream</h2>
          </Link>
        </div>

        <div className="sm:flex sm:mx-0 mx-auto justify-between space-y-8 sm:space-y-0 sm:bg-transparent bg-white sm:p-0 p-4 sm:rounded-none rounded-xl">
          <div className="  sm:w-1/3 w-full  flex justify-between sm:justify-normal items-center gap-3">
            <img className="w-20" src={team5} alt="" />
            <img className="w-10 h-10 my-auto" src={vs} alt="" />
            <img className="w-20" src={team6} alt="" />
          </div>
          <div className=" divider divider-horizontal"></div>
          <div className="  sm:w-1/3 w-full  space-x-4 text-center ">
            <span className="bg-black text-white text-sm px-6 py-2">
              All Match
            </span>
            <span className="bg-black text-white text-sm px-6 py-2">
              Up Comning Match
            </span>
            <h2 className="font-bold md:text-2xl lg:text-4xl pt-4">
              BATTEL CREEK ONSTRAPORT
            </h2>
          </div>
          <Link
            to="https://www.twitch.tv"
            className="flex items-center justify-center gap-3 sm:w-1/3 w-full "
          >
            <MdOutlineLiveTv className="text-2xl"></MdOutlineLiveTv>
            <h2>watch stream</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingMatch;
