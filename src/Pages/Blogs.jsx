import axios from "axios";
import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import BlogCart from "../Components/BlogCart";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  axios.get("http://localhost:5000/blogs").then((res) => {
    setBlogs(res.data);
  });

  return (
    <div>
      <h2 className="text-3xl font-bold text-center py-10 underline">
              <Typewriter
                words={["BLOGS"]}
                loop={5}
                cursor
                typeSpeed={70}
                deleteSpeed={30}
                delaySpeed={1000}
              />
            </h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {blogs.map((blog) => (
        <BlogCart key={blog._id} blog={blog}></BlogCart>
      ))}
    </div>
    </div>
  );
};

export default Blogs;
