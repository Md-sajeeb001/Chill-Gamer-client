import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import WatchListTabel from "../Components/WatchListTabel";

const WatchList = () => {
  const loderData = useLoaderData();
  const { user } = useContext(AuthContext);

  const WatchListData = loderData?.filter((data) => data?.email == user?.email);

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Game Name</th>
              <th>Rating</th>
            </tr>
          </thead>
          <tbody>
            {WatchListData.map((data, index) => (
              <WatchListTabel
                key={data._id}
                data={data}
                index={index}
              ></WatchListTabel>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WatchList;
