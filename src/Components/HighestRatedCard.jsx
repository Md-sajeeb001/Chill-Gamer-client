/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

const HighestRatedCard = ({ data }) => {
  const { _id, description, rating, publishing, select, thumbnail, Gamename } =
    data;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure className="w-full h-[300px]">
        <img src={thumbnail} alt="Game" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Gamename}</h2>
        <p>{description}</p>
        <p className="flex items-center gap-2">
          <span>{rating}</span> <span><MdOutlineStar></MdOutlineStar></span>
        </p>
        <div className="divider"></div>
        <p>{select}</p>
        <p>Publishing: {publishing}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/reviewDetails/${_id}`}
            className="btn bg-white text-black hover:text-white"
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
