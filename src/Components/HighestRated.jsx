import HighestRatedCard from "./HighestRatedCard";

/* eslint-disable react/prop-types */
const HighestRated = ({ lodedData }) => {
  return (
   <div>
    <h2 className="text-3xl font-bold text-center pt-10 underline">Popular</h2>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-12">
      {lodedData?.slice(0, 6).map((data) => (
        <HighestRatedCard key={data._id} data={data}></HighestRatedCard>
      ))}
    </div>
   </div>
  );
};

export default HighestRated;
