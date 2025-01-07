import { Typewriter } from "react-simple-typewriter";
const TypeWriter = () => {
  return (
    <div>
      <h1>
        <Typewriter
          words={["HIGHEST RATED GAME"]}
          loop={5}
          cursor
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h1>
    </div>
  );
};

export default TypeWriter;
