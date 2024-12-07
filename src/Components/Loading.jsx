import Lottie from "lottie-react";
import loading from "../Providers/Animation.json";

const Loading = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <Lottie animationData={loading}></Lottie>
    </div>
  );
};

export default Loading;
