import { Typewriter } from "react-simple-typewriter";
import HighestRatedCard from "./HighestRatedCard";

/* eslint-disable react/prop-types */
const HighestRated = ({ lodedData }) => {
  return (
    <div className="lg:py-14 py-4">
      <h2 className="text-3xl font-bold text-center pt-10 underline">
        <Typewriter
          words={["Highest Rated Game"]}
          loop={5}
          cursor
          typeSpeed={70}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 pt-12">
        {lodedData?.slice(0, 6).map((data) => (
          <HighestRatedCard key={data._id} data={data}></HighestRatedCard>
        ))}
      </div>
    </div>
  );
};

export default HighestRated;
