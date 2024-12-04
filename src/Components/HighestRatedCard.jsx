/* eslint-disable react/prop-types */

const HighestRatedCard = ({ data }) => {
  const { description, rating, publishing, select, thumbnail, Gamename } = data;
  return (
    <div className="card card-compact bg-base-100  shadow-xl">
      <figure className="w-full h-[300px]">
        <img
          src={thumbnail}
          alt="Game"
          className="w-full h-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{Gamename}</h2>
        <p>{description}</p>
        <p>{rating}</p>
        <div className="divider"></div>
        <p>{select}</p>
        <p>Publishing: {publishing}</p>
        <div className="card-actions justify-end">
          <button className="btn bg-white text-black hover:text-white">Explore Detail</button>
        </div>
      </div>
    </div>
  );
};

export default HighestRatedCard;
