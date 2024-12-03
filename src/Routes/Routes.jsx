import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddReview from "../Pages/AddReview";
import AllReview from "../Pages/AllReview";
import ReviewDetails from "../Pages/ReviewDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/gameReviews"),
      },
      {
        path: "/addReview",
        element: <AddReview></AddReview>,
      },
      {
        path: "/allReviews",
        element: <AllReview></AllReview>,
        loader: () => fetch("http://localhost:5000/gameReviews"),
      },
      {
        path: "/reviewDetails/:id",
        element: <ReviewDetails></ReviewDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/gameReviews/${params.id}`),
      },
    ],
  },
]);

export default router;
