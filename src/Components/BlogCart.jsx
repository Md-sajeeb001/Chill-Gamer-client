/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const BlogCart = ({ blog }) => {
  // console.log(blog)
  const { _id, content, author, title, main_img } = blog;
  return (
    <Link to={`/blogDetails/${_id}`}>
      <div className="sm:flex max-w-2xl mx-auto bg-gray-800 rounded-lg shadow-md overflow-hidden">
        <div className="sm:w-1/2 w-full relative">
          <img
            src={main_img}
            alt="Starcraft Tournament"
            className="w-full h-full object-cover"
          />
          <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-bold uppercase px-2 py-1 rounded">
            epic
          </span>
        </div>
        <div className="sm:w-1/2 w-full  p-4">
          <h2 className="text-xl font-bold text-white mb-2">{title}</h2>
          <p className="text-gray-400 text-sm mb-4">
            {content.substring(0, 200)}....
          </p>
          <div className="flex justify-between items-center text-white text-xs">
            <span>September 17, 2021</span>
            <span className="bg-orange-600 p-3 rounded-md">by {author}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlogCart;
