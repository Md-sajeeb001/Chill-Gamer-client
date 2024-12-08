import welcome from "../assets/welcome.png"

const Welcome = () => {
  return (
    <div className="flex justify-center bg-black rounded-xl p-6 gap-5">
      <div className="w-1/2 space-y-6">
        <h1 className="text-7xl font-bold text-white ">
          WELCOME TO <br /> ROBOT CAVE!
        </h1>
        <p className="text-lg text-slate-300">
          Etiam rhoncus, maecenas tempus tellus eget dolor condimentum rhoncus,
          sem quam semper libero amet, adipiscing sem neque sed ipsum. Lorem
          ipsum dolor sit.
        </p>
        <button className="btn w-full bg-white text-black hover:text-white">EXPLORE</button>
      </div>
      <div className="w-1/2 h-[350px]">
      <img src={welcome} className="w-full h-full" alt="" />
      </div>
    </div>
  );
};

export default Welcome;
