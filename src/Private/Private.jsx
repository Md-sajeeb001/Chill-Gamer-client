/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProviders";
import { Navigate } from "react-router-dom";
import Loading from "../Components/Loading";

const Private = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (user) {
    return children;
  }

  if (loading) {
    return <Loading></Loading>;
  }

  return <Navigate to="/signup"></Navigate>;
};

export default Private;
