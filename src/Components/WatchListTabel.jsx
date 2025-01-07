/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineStar } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { BiDetail } from "react-icons/bi";

const WatchListTabel = ({ data, index, setDatas, datas }) => {
  const { rating, displayName, Gamename, _id } = data;

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
        fetch(
          `https://chill-gamer-server-zeta-liart.vercel.app/gameReviews/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount) {
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
    <tr className="hover space-y-8">
      <th>{index + 1}</th>
      <td>{displayName}</td>
      <td>{Gamename}</td>
      <td className="flex items-center gap-3">
        <span>{rating}</span>{" "}
        <span>
          <MdOutlineStar></MdOutlineStar>
        </span>
      </td>
      <td className="space-x-5">
        <button>
          <Link to={`/reviewDetails/${_id}`} className="btn bg-green-500 text-white flex-grow">
            <BiDetail></BiDetail>
          </Link>
        </button>
        <button
          onClick={() => handelRemove(_id)}
          className="btn bg-red-500 text-white"
        >
          <AiOutlineDelete></AiOutlineDelete>
        </button>
      </td>
    </tr>
  );
};

export default WatchListTabel;
