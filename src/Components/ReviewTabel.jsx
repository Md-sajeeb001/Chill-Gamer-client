/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const ReviewTabel = ({ data, setDatas, datas }) => {
  const { _id, Gamename, email, thumbnail, name, description, rating } = data;

  const handelRemove = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(
            `https://chill-gamer-server-zeta-liart.vercel.app/gameReviews/${id}`
          )
          .then((res) => {
            if (res.data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Review Game has been deleted.",
                icon: "success",
              });
            }
            const remainingReviews = datas?.filter((data) => data._id !== id);
            setDatas(remainingReviews);
          });
      }
    });
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={thumbnail} alt="thumbnail" />
            </div>
          </div>
          <div>
            <div className="font-bold">{Gamename}</div>
            <div className="text-sm text-slate-500">{name}</div>
          </div>
        </div>
      </td>
      <td>
        {email}
        <br />
        <span className="badge badge-ghost badge-sm">
          {description.substring(0, 100)}....
        </span>
      </td>
      <td className="flex items-center gap-1">
        <p>{rating}</p>
        <MdOutlineStar></MdOutlineStar>
      </td>
      <td>
        <Link
          to={`/updateReview/${_id}`}
          className="btn btn-ghost btn-sm text-lg"
        >
          <GrUpdate></GrUpdate>
        </Link>
        <Link
          onClick={() => handelRemove(_id)}
          className="btn btn-ghost btn-sm text-xl"
        >
          <AiOutlineDelete></AiOutlineDelete>
        </Link>
      </td>
    </tr>
  );
};

export default ReviewTabel;
