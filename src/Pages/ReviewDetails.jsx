import { Link, useLoaderData } from "react-router-dom";
import { MdOutlineStar } from "react-icons/md";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";

const ReviewDetails = () => {
  const data = useLoaderData();
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;

  const { description, rating, publishing, select, thumbnail, Gamename, name } =
    data;

  const myWatchlist = {
    description,
    rating,
    publishing,
    select,
    thumbnail,
    Gamename,
    name,
    email,
    displayName,
  };

  const handelAddWishList = () => {
    fetch("https://chill-gamer-server-zeta-liart.vercel.app/myWatchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myWatchlist),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          toast.success("Added Your Game in Watch List", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
        }
      });
  };

  return (
    <div className="pt-36 pb-12">
      <div className="sm:flex justify-between card-side bg-base-100 shadow-xl">
        <figure className="sm:w-1/2 sm:h-[500px]">
          <img
            src={thumbnail}
            alt="thumbnail"
            className="w-full h-full object-cover sm:rounded-tl-xl sm:rounded-bl-xl"
          />
        </figure>
        <div className="sm:w-1/2 lg:px-10 md:px-5 ">
          <div className="w-full  sm:space-y-6 space-y-3 py-3 sm:py-0 sm:pt-6">
            <h2 className="card-title text-5xl font-bold">Game: {Gamename}</h2>
            <p className="text-sm text-slate-600">{description}</p>
            <p className="text-lg font-semibold">Publishing: {publishing}</p>
            <p className="text-lg font-semibold">Status: {select}</p>
            <div className="divider"></div>
            <div>
              <i className="text-lg font-semibold"> Name: {name}</i> <br />
              <p className="flex items-center gap-3">
                <span>{rating}</span>
                <MdOutlineStar></MdOutlineStar>
              </p>
            </div>
            <div className="card-actions">
              <Link
                onClick={handelAddWishList}
                className="btn bg-white text-black hover:text-white"
              >
                Add to WatchList
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
