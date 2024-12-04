import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/addReview">Add Review</NavLink>
      </li>
      <li>
        <NavLink to="/myReviews">My Reviews</NavLink>
      </li>
      <li>
        <NavLink to="/watchlist">Game WatchList</NavLink>
      </li>
    </>
  );

  const handelLogOut = () => {
    signOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="navbar bg-base-100 px-8 py-4 border-b ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="flex items-center gap-2" to="/">
          <img className="w-12" src={logo} alt="" />
          <h2 className="text-xl font-semiboldbold">Chill Gamer</h2>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <button onClick={handelLogOut}>
            <Link className="btn">Log Out</Link>
          </button>
        ) : (
          <div>
            <button>
              <Link to="/signup" className="btn">
                Sign Up
              </Link>
            </button>
            <button>
              <Link to="/signin" className="btn">
                Sign in
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navber;
