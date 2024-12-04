import { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [showPass, setShowPass] = useState(false);

  const handelSignUp = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    const checkbox = e.target.checkbox.checked;
    // const newUser = { name, email, photo, password, checkbox };
    // console.log(newUser);

    const checkCase = /^(?=.*[a-z])(?=.*[A-Z]).*$/;
    if (!checkCase.test(password)) {
      toast.error("password must be upper case and lower case!", {
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

    const passwordValidation = /^.{6,}$/;
    if (!passwordValidation.test(password)) {
      toast.error("password must be at least 6 character!", {
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

    if (!checkbox) {
      toast.error("accept our terms and condition!", {
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

    createUser(email, password)
      .then((res) => {
        console.log(res.user);

        updateUser({ displayName: name, photoURL: photo })
          .then((res) => {
            console.log(res);
          })
          .catch((error) => {
            console.log(error.message);
          });
        if (res.user) {
          Swal.fire({
            title: "Success",
            text: "user Register Successful",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/");
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-2xl mx-auto shrink-0 shadow-2xl">
      <h2 className="text-3xl font-bold text-center pt-4">SignUp Now!</h2>
      <form onSubmit={handelSignUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            name="name"
            type="Name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
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
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo Url</span>
          </label>
          <input
            name="photo"
            type="photo"
            placeholder="photo url"
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
        <div className="form-control">
          <label className="label justify-start gap-2 cursor-pointer">
            <input name="checkbox" type="checkbox" className="checkbox" />
            <span className="label-text">accept terms and condition</span>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sign Up or Register</button>
        </div>
        <p className="text-center py-5">
          Already Have An Account?{" "}
          <Link className="hover:text-red-500 underline" to="/signin">
            Sign In
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
