import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { FaUser } from "react-icons/fa";

const SignIn = () => {
  const navigate = useNavigate();

  const { loginUser } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);

  const handelSignIn = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    loginUser(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            title: "Success",
            text: "User Sign In Successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
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
    <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold text-center pt-4">SignIn Now!</h2>
      <form onSubmit={handelSignIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            name="email"
            type="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>

        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            name="password"
            type={showPass ? "text" : "password"}
            placeholder="password"
            className="input input-bordered"
            required
          />
          <button
            type="button"
            onClick={() => setShowPass(!showPass)}
            className="absolute right-8 top-12 text-2xl "
          >
            {showPass ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
          </button>
        </div>

        <label className="label">
          <Link href="#" className="label-text-alt link link-hover">
            Forgot password?
          </Link>
        </label>

        <div className="form-control mt-6">
          <button className="btn bg-white text-black hover:text-white">
           <FaUser></FaUser> Sign In
          </button>
        </div>

        <p className="text-center py-5">
          Dont Have An Account?{" "}
          <Link className="hover:text-red-500 underline" to="/signup">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
