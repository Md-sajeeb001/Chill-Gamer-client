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
    fetch("http://localhost:5000/myWatchlist", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(myWatchlist),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          toast.success("Added Your Game in Watch List", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      });
  };

  return (
    <div className="sm:flex justify-between card-side bg-base-100 shadow-xl">
      <figure className="sm:w-1/2 sm:h-[500px]">
        <img
          src={thumbnail}
          alt="thumbnail"
          className="w-full h-full object-cover sm:rounded-tl-xl sm:rounded-bl-xl"
        />
      </figure>
      <div className="sm:w-1/2 lg:px-10 md:px-5">
        <div className="w-full flex items-center justify-center text-center flex-col sm:space-y-6 space-y-3 py-3 sm:py-0 sm:pt-6">
          <h2 className="card-title">Game Name: {Gamename}</h2>
          <p className="text-sm text-slate-400">Description: {description}</p>
          <p>Publishing: {publishing}</p>
          <p>Status: {select}</p>
          <div className="divider"></div>
          <div>
            <i>Name: {name}</i> <br />
            <p className="flex items-center justify-center gap-3">
              <span>{rating}</span>
              <MdOutlineStar></MdOutlineStar>
            </p>
          </div>
          <div className="card-actions justify-end">
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
  );
};

export default ReviewDetails;
