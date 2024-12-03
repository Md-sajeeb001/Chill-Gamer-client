import { useLoaderData } from "react-router-dom";

const ReviewDetails = () => {
  const data = useLoaderData();

  const {
    description,
    rating,
    publishing,
    select,
    thumbnail,
    Gamename,
    name,
    email,
  } = data;

  return (
    <div className="card justify-between card-side bg-base-100 shadow-xl">
      <figure className="w-1/2 h-[500px]">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="flex items-center justify-center text-center flex-col px-36 space-y-6">
        <h2 className="card-title">Game Name: {Gamename}</h2>
        <p>Description: {description}</p>
        <p>Publishing: {publishing}</p>
        <p>{select}</p>
        <div className="divider"></div>
        <div>
          <i>{name}</i> <br />
          <i>{email}</i>
          <p>{rating}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn bg-white text-black hover:text-white">
            Add to WatchList
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
