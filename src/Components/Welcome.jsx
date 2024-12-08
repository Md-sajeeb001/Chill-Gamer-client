import welcome from "../assets/welcome.png";

const Welcome = () => {
  return (
    <div className="lg:flex lg:justify-center bg-black rounded-xl p-6 gap-5">
      <div className="lg:w-1/2 space-y-6">
        <h1 className="sm:text-7xl text-3xl text-center font-bold text-white ">
          WELCOME TO <br /> ROBOT CAVE!
        </h1>
        <p className="sm:text-lg text-sm text-slate-300">
          Welcome to the Robot Cave, a futuristic sanctuary where technology
          meets imagination! This innovative space is designed to showcase the
          marvels of robotics and artificial intelligence, blending sleek
          aesthetics with cutting-edge functionality. Inside, youll find
          interactive exhibits, robotic demonstrations, and hands-on workshops
          that inspire curiosity and creativity. The atmosphere is a mix of
          sci-fi wonder and scientific precision, perfect for tech enthusiasts
          of all ages. Step into the Robot Cave and explore a world where
          machines come alive!
        </p>
        <button className="btn w-full bg-white text-black hover:text-white">
          EXPLORE
        </button>
      </div>
      <div className="lg:w-1/2 sm:h-[500px] h-[300px]">
        <img src={welcome} className="w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
