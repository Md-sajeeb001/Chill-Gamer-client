import axios from "axios";
// import { format } from "date-fns";
import { useState } from "react";
import { useParams } from "react-router-dom";


const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  axios.get("http://localhost:5000/blogs").then((res) => {
    const datas = res.data;
    // console.log(datas);
    const item = datas.find((data) => data._id == id);
    setBlog(item);
  });
  const { content, category, date, author, title, images, main_img } = blog;

  return (
    <div className="pt-36  pb-12 px-6">
      <div className="max-w-6xl mx-auto rounded-md shadow-md overflow-hidden">
        <div className="relative">
          <img
            src={main_img}
            alt="Starcraft Tournament"
            className=" w-full h-full object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
            epic
          </span>
        </div>
        <div className=" p-4">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-white">{category}</p>
          <p className="text-gray-400 text-sm mb-4">{content}</p>
          <div className="flex justify-between items-center text-white text-xs">
            {/* <span>{format(new Date(date), 'PPP')}</span> */}
            <span className="bg-red-600 p-3 rounded-md">by {author}</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-5 p-4">
          {images?.map((img, idx) => (
            <img className="w-40" key={idx} src={img}></img>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
