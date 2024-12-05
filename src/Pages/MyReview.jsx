import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import ReviewTabel from "../Components/ReviewTabel";

const MyReview = () => {
  const loderData = useLoaderData();
  const { user } = useContext(AuthContext);
  const [datas, setDatas] = useState(loderData);

  const emailData = datas?.filter((data) => data?.email == user?.email);

  return (
    <div className="mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Thumbnail</th>
              <th>Email</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {emailData?.map((data) => (
              <ReviewTabel
                key={data._id}
                data={data}
                datas={datas}
                setDatas={setDatas}
              ></ReviewTabel>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyReview;
