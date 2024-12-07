import { useLoaderData } from "react-router-dom";
import AllCard from "../Components/AllCard";
import { useState } from "react";

const AllReview = () => {
  const loderData = useLoaderData();
  console.log(loderData);
  const [reviews, setReviews] = useState(loderData);

  const [sort, setSort] = useState("");

 

  return (
    <div>
      <div className="dropdown mb-4">
        <div tabIndex={0} role="button" className="btn m-1">
          {sort ? `Sort By ${sort}` : "Sort By"}
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
        >
          <li>
            <button onClick={() => handelSort("Rating")}>Sort By Rating</button>
          </li>
          <li>
            <button onClick={() => handelSort("publishing")}>
              Sort By Year
            </button>
          </li>
        </ul>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4  gap-5">
        {reviews?.map((data) => (
          <AllCard key={data._id} data={data}></AllCard>
        ))}
      </div>
    </div>
  );
};

export default AllReview;
