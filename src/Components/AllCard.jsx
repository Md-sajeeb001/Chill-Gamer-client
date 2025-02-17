/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const AllCard = ({ data }) => {
  const { _id, description, thumbnail, Gamename, publishing } = data;

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="sm:px-4 sm:pt-4 w-full h-[150px]">
        <img src={thumbnail} alt="game" className="w-full h-full rounded-md" />
      </figure>
      <div className="sm:px-4 px-2 py-2 sm:py-4 space-y-3 flex flex-col">
        <h2 className="card-title">{Gamename}</h2>
        <p className="text-sm text-slate-300 sm:block hidden">{description.substring(0, 90)}.....</p>
        <p className="text-sm text-slate-300">Publishing: {publishing}</p>
        <div className="card-actions flex-grow">
          <Link
            to={`/reviewDetails/${_id}`}
            className="btn flex-grow"
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
