import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";

const AllReview = () => {
  const loderData = useLoaderData();

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
      {loderData?.map((data) => (
        <AllCard key={data._id} data={data}></AllCard>
      ))}
    </div>
  );
};

export default AllReview;
