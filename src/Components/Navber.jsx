import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { toast } from "react-toastify";
import Theme from "./Theme/Theme";
import Lottie from "lottie-react";
import logo from "../Providers/logo.json";

const Navber = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/allReviews">All Reviews</NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink to="/addReview">Add Review</NavLink>
          </li>
          <li>
            <NavLink to="/myReviews">My Reviews</NavLink>
          </li>
          <li>
            <NavLink to="/myWatchlist">Game WatchList</NavLink>
          </li>
        </>
      )}
    </>
  );

  const handelLogOut = () => {
    signOutUser()
      .then((res) => {
        if (res) {
          navigate("/");
        }
      })
      .catch((error) => {
        if (error) {
          toast.error("invalid credential!", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          return;
        }
      });
  };

  return (
    <div className="navbar text-black fixed top-0 z-50 mb-20 sm:px-8 px-3 py-4 border-b bg-white">
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
          {/* <img className="w-12" src={logo} alt="" /> */}
          <div className="w-16">
            <Lottie animationData={logo} />
          </div>
          <h2 className="sm:text-xl sm:font-semibold">Chill Gamer</h2>
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center sm:gap-3">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    className="w-12 rounded-full"
                    src={user.photoURL}
                    alt="userImage"
                    title={user.displayName}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <button className="" onClick={handelLogOut}>
                    <Link className="bg-accent border-none outline-none">
                      Log Out
                    </Link>
                  </button>
                </li>
              </ul>
            </div>
            <div>
              <button className="sm:block hidden" onClick={handelLogOut}>
                <Link className="btn bg-accent border-none outline-none">
                  Log Out
                </Link>
              </button>
            </div>
          </div>
        ) : (
          <div className="space-x-4">
            <button>
              <Link
                to="/signup"
                className="btn bg-accent text-white border-none outline-none"
              >
                Sign Up
              </Link>
            </button>
            <button>
              <Link
                to="/signin"
                className="btn bg-accent text-white border-none outline-none"
              >
                Sign in
              </Link>
            </button>
          </div>
        )}
      </div>

      <div className="ml-4">
        <Theme></Theme>
      </div>
    </div>
  );
};

export default Navber;
