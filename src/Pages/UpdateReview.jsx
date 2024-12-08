import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const UpdateReview = () => {
  const [startDate, setStartDate] = useState(new Date());

  const navigate = useNavigate();
  const dbData = useLoaderData();
  const {
    _id,
    thumbnail,
    select,
    rating,
    publishing,
    name,
    email,
    description,
    Gamename,
  } = dbData;

  const handelUpdateReview = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const description = formData.get("description");
    const rating = formData.get("rating");
    const publishing = formData.get("publishing");
    const select = formData.get("select");
    const thumbnail = formData.get("thumbnail");
    const Gamename = formData.get("Gamename");

    const newReview = {
      name,
      email,
      description,
      rating,
      publishing,
      select,
      thumbnail,
      Gamename,
    };

    fetch(`https://chill-gamer-server-zeta-liart.vercel.app/gameReviews/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Success",
            text: "Review Update SuccessFully",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/myReviews");
        }
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold text-center pt-8 underline">
        Update Review
      </h2>
      <form onSubmit={handelUpdateReview} className="card-body">
        {/* row 1 */}
        <div className="flex items-center gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              defaultValue={name}
              readOnly={name}
              name="name"
              type="name"
              placeholder="name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              defaultValue={email}
              readOnly={email}
              name="email"
              type="email"
              placeholder="email"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row 2 */}
        <div className="flex items-center gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              defaultValue={rating}
              name="rating"
              type="rating"
              placeholder="rating"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Game Name</span>
            </label>
            <input
              defaultValue={Gamename}
              name="Gamename"
              type="Gamename"
              placeholder="Gamename"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        {/* row 3 */}
        <div className="flex items-center gap-4">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Publishing year</span>
            </label>
            <DatePicker
              defaultValue={publishing}
              name="publishing"
              type="Publishing "
              placeholder="Publishing"
              className="input input-bordered w-full"
              required
              selected={startDate}
              onChange={(date) => setStartDate(date)}
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Genres</span>
            </label>

            <select
              name="select"
              defaultValue={select}
              className="input input-bordered w-full"
            >
              <option>Adventure</option>
              <option>RPG (Role-Playing Game)</option>
              <option>Action</option>
            </select>
          </div>
        </div>
        {/* row 4 */}
        <div className="flex items-center gap-4">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Thumbnail Url</span>
            </label>
            <input
              defaultValue={thumbnail}
              name="thumbnail"
              type="Thumbnail"
              placeholder="Thumbnail Url"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Description </span>
          </label>
          <textarea
            defaultValue={description}
            name="description"
            type="description "
            placeholder="description "
            className="input input-bordered w-full"
            required
          />
        </div>

        <div className="form-control w-full mt-6">
          <button className="btn bg-white text-black hover:text-white">
            Update Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateReview;
