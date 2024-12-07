/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";

const AllCard = ({ data }) => {
  const { _id, description, thumbnail, Gamename, publishing, rating } = data;

  return (
    <div className="card bg-base-100  shadow-xl">
      <figure className="px-4 pt-4 w-full h-[150px]">
        <img src={thumbnail} alt="game" className="w-full h-full rounded-lg" />
      </figure>
      <div className="px-4 py-4 space-y-3 flex flex-col">
        <h2 className="card-title">{Gamename}</h2>
        <p className="text-sm text-slate-400">{description}</p>
        <p className="text-sm text-slate-400 flex items-center gap-2">
          <span>{rating}</span>
          <span className="text-white">
            <MdOutlineStar></MdOutlineStar>
          </span>
        </p>
        <p className="text-sm text-slate-400">Publishing: {publishing}</p>
        <div className="card-actions">
          <Link
            to={`/reviewDetails/${_id}`}
            className="btn bg-white text-black hover:text-white flex-grow"
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllCard;
