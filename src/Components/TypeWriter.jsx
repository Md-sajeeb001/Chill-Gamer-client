import { Typewriter } from "react-simple-typewriter";
const TypeWriter = () => {
  return (
    <div>
      <h1 style={{ margin: "auto 0", fontWeight: "normal" }}>
        <span style={{ color: "red", fontWeight: "bold" }}>
          <Typewriter
            words={["HIGHEST RATED GAME"]}
            loop={5}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </h1>
    </div>
  );
};

export default TypeWriter;
