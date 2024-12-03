import { Outlet } from "react-router-dom";
import Navber from "../Components/Navber";
import Footer from "../Components/Footer";

const MainLayOut = () => {
  return (
    <div>
      <Navber></Navber>
      <div className="min-h-[calc(100vh_-_288px)] container mx-auto px-6 sm:px-0 py-12">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayOut;
