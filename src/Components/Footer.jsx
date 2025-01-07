import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";

const Footer = () => {
  const { user } = useContext(AuthContext);
  const subscribe = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    if (email) {
      toast.success("Thanks for subscribing our newsletter!");
    }
  };

  return (
    <div className="border-t bordewr py-8">
      <div>
        <nav className="text-center  py-4 space-x-6">
          <NavLink className="hover:text-red-500 hover:underline" to="/">
            Home
          </NavLink>
          <NavLink
            className="hover:text-red-500 hover:underline"
            to="/allReviews"
          >
            All Reviews
          </NavLink>
          {user && (
            <>
              <NavLink
                className="hover:text-red-500 hover:underline"
                to="/addReview"
              >
                Add Review
              </NavLink>
              <NavLink
                className="hover:text-red-500 hover:underline"
                to="/myReviews"
              >
                My Reviews
              </NavLink>
              <NavLink
                className="hover:text-red-500 hover:underline"
                to="/myWatchlist"
              >
                Game WatchList
              </NavLink>
            </>
          )}
        </nav>
        <nav className="text-center  py-4 space-x-6">
          <Link className="hover:text-red-500 hover:underline" to="/signin">
            Sign In
          </Link>{" "}
          <Link
            target="_blank"
            to="https://www.facebook.com"
            className="link link-hover hover:text-red-500 hover:underline"
          >
            Facebook
          </Link>
          <Link
            target="_blank"
            to="https://github.com/Md-sajeeb001"
            className="link link-hover hover:text-red-500 hover:underline"
          >
            Github
          </Link>
          <Link
            target="_blank"
            to="https://discord.com/channels/1323883740744646758/1323883740744646761"
            className="link link-hover hover:text-red-500 hover:underline"
          >
            Discord
          </Link>
        </nav>
        <nav className="lg:flex md:flex flex-col justify-between items-center px-20">
          <div className="divider"></div>
          <form
            onSubmit={subscribe}
            className="flex items-center flex-row-reverse gap-4"
          >
            <input
              name="email"
              type="text"
              className="border-b-2 bg-transparent border-red-500 border-0 outline-none"
              placeholder="Subscribe to Our NewsLetter"
            />
            <button className="btn bg-red-600">Subscribe</button>
          </form>
        </nav>
      </div>
    </div>
  );
};

export default Footer;
