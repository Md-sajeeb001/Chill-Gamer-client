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
import Error from "../Pages/Error";
import BlogDetails from "../Components/BlogDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://chill-gamer-server-zeta-liart.vercel.app/gameReviews"),
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
        loader: () =>
          fetch("https://chill-gamer-server-zeta-liart.vercel.app/gameReviews"),
      },
      {
        path: "/reviewDetails/:id",
        element: (
          <Private>
            <ReviewDetails></ReviewDetails>
          </Private>
        ),
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-zeta-liart.vercel.app/gameReviews/${params.id}`
          ),
      },
      {
        path: "/myReviews",
        element: (
          <Private>
            <MyReview></MyReview>
          </Private>
        ),
        loader: () =>
          fetch("https://chill-gamer-server-zeta-liart.vercel.app/gameReviews"),
      },
      {
        path: "/updateReview/:id",
        element: <UpdateReview></UpdateReview>,
        loader: ({ params }) =>
          fetch(
            `https://chill-gamer-server-zeta-liart.vercel.app/gameReviews/${params.id}`
          ),
      },
      {
        path: "/myWatchlist",
        element: (
          <Private>
            <WishList></WishList>
          </Private>
        ),
        loader: () =>
          fetch("https://chill-gamer-server-zeta-liart.vercel.app/myWatchlist"),
      },
      {
        path: "/blogDetails/:id",
        element: <BlogDetails></BlogDetails>,
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
