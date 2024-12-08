import Lottie from "lottie-react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Providers/logo.json";

const Footer = () => {
  return (
    <div className="border-t bordewr ">
      <footer className="footer text-base-content p-10">
        <nav>
          <h6 className="footer-title">Services</h6>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/allReviews">All Reviews</NavLink>
          <NavLink to="/addReview">Add Review</NavLink>
          <NavLink to="/myReviews">My Reviews</NavLink>
          <NavLink to="/myWatchlist">Game WatchList</NavLink>
        </nav>
        <nav>
          <h6 className="footer-title">Contect Us</h6>
          <Link className="hover:text-red-500 underline" to="/signin">
            Sign In
          </Link>{" "}
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <Link className="flex items-center gap-2" to="/">
              {/* <img className="w-12" src={logo} alt="" /> */}
              <div className="w-16">
                <Lottie animationData={logo} />
              </div>
              <h2 className="sm:text-xl sm:font-semibold">Chill Gamer</h2>
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
