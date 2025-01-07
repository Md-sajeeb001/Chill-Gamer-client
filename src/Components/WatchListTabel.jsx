/* eslint-disable react/prop-types */
import { MdOutlineStar } from "react-icons/md";

const WatchListTabel = ({ data, index }) => {
  const { rating, displayName, Gamename } = data;

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
    </tr>
  );
};

export default WatchListTabel;
