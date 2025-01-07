/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const HighestRatedCard = ({ data }) => {
  const { _id, description, thumbnail, Gamename, publishing } = data;
  return (
    <div className="card card-compact bg-base-100 rounded-md shadow-xl">
      <figure className="w-full h-[200px]">
        <img src={thumbnail} alt="Game" className="w-full h-full" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Gamename}</h2>
        <p>{description.substring(0, 80)}....</p>
        <p className="text-sm text-slate-400">Publishing: {publishing}</p>
        <hr />
        <div className="card-actions justify-end w-full">
          <Link
            to={`/reviewDetails/${_id}`}
            className="btn  w-full text-center "
          >
            <button> Explore Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
