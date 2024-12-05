/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";
import { GrUpdate } from "react-icons/gr";
import { AiOutlineDelete } from "react-icons/ai";
import Swal from "sweetalert2";

const ReviewTabel = ({ data, setDatas, datas }) => {
  const { _id, Gamename, email, thumbnail, name, description, rating } = data;

  const handelRemove = (id) => {
    console.log("delete game is", id);

    fetch(`http://localhost:5000/gameReviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          Swal.fire({
            title: "Success",
            text: "Game Review Removed Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        const remainingReviews = datas.filter((data) => data._id !== id);
        setDatas(remainingReviews);
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
        <span className="badge badge-ghost badge-sm">{description}</span>
      </td>
      <td className="flex items-center gap-1">
        <p>{rating}</p>
        <MdOutlineStar></MdOutlineStar>
      </td>
      <th>
        <button className="btn btn-ghost btn-sm text-lg">
          <GrUpdate></GrUpdate>
        </button>
        <button
          onClick={() => handelRemove(_id)}
          className="btn btn-ghost btn-sm text-xl"
        >
          <AiOutlineDelete></AiOutlineDelete>
        </button>
      </th>
    </tr>
  );
};

export default ReviewTabel;
