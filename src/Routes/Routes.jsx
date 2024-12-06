import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../Main/MainLayOut";
import Home from "../Pages/Home";
import AddReview from "../Pages/AddReview";
import AllReview from "../Pages/AllReview";
import ReviewDetails from "../Pages/ReviewDetails";
import SignUp from "../Pages/SignUp";
import SignIn from "../Pages/SignIn";
import Private from "../Private/Private";
import MyReview from "../Pages/MyReview";
import UpdateReview from "../Pages/UpdateReview";
import WishList from "../Pages/WatchList";

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
        element: (
          <Private>
            <AddReview></AddReview>
          </Private>
        ),
      },
      {
        path: "/allReviews",
        element: <AllReview></AllReview>,
        loader: () => fetch("http://localhost:5000/gameReviews"),
      },
      {
        path: "/reviewDetails/:id",
        element: (
          <Private>
            <ReviewDetails></ReviewDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/gameReviews/${params.id}`),
      },
      {
        path: "/myReviews",
        element: (
          <Private>
            <MyReview></MyReview>
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/gameReviews"),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/gameReviews/${params.id}`),
      },
      {
        path: "/myWatchlist",
        element: (
          <Private>
            <WishList></WishList>
          </Private>
        ),
        loader: () => fetch("http://localhost:5000/myWatchlist"),
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/signin",
        element: <SignIn></SignIn>,
      },
    ],
  },
]);

export default router;
