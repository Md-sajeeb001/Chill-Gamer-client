import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../Providers/AuthProviders";
import { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const AddReview = () => {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const { email, displayName } = user;

  const [startDate, setStartDate] = useState(new Date());

  const handelAddReview = (e) => {
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
    console.log(newReview);

    fetch("https://chill-gamer-server-zeta-liart.vercel.app/gameReviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Review added Successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      });
  };

  return (
    <div className="pt-36 pb-12 lg:px-0 px-6">
      <div className="card bg-base-100 w-full max-w-4xl mx-auto shrink-0 shadow-2xl">
        <h2 className="text-3xl font-bold text-center pt-8 underline">
          Add New Review
        </h2>
        <form onSubmit={handelAddReview} className="card-body">
          {/* row 1 */}
          <div className="flex items-center gap-4">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                defaultValue={displayName}
                readOnly={displayName}
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
                <span className="label-text">Game Name</span>
              </label>
              <input
                name="Gamename"
                type="Gamename"
                placeholder="Gamename"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <input
                name="rating"
                type="rating"
                placeholder="rating"
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

              <select name="select" className="input input-bordered w-full">
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
                name="thumbnail"
                type="Thumbnail"
                placeholder="Thumbnail Url"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>
          {/* row 5 */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description </span>
            </label>
            <textarea
              name="description"
              type="text"
              rows={50}
              cols={50}
              placeholder="description "
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control w-full mt-6">
            <button className="btn bg-white text-black hover:text-white">
              Add Review
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
