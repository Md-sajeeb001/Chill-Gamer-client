import { Typewriter } from "react-simple-typewriter";

const About = () => {
  return (
    <div className="lg:py-12 py-8">
      <h2 className="text-3xl font-bold text-center underline">
        <Typewriter
          words={["About Chill Gamer"]}
          loop={5}
          cursor
          typeSpeed={70}
          deleteSpeed={30}
          delaySpeed={1000}
        />
      </h2>

      <div className="">
        <div className="sm:flex gap-8 pt-10">
          <div className="sm:w-1/2">
            <h4 className="text-lg font-bold">Introduction</h4>
            <p className="text-sm">
              <span className="italic font-bold">
                Welcome to Chill Gamer, your ultimate haven for relaxing and
                immersive gaming experiences.
              </span>{" "}
              <br />
              We believe gaming isn’t just about high scores and fast-paced
              competition—it’s also about taking a break from the chaos of
              everyday life, immersing yourself in peaceful worlds, and enjoying
              the journey at your own pace.
            </p>
          </div>
          <div className="sm:w-1/2">
            <h4 className="text-lg font-bold">Our Mission</h4>
            <p className="text-sm">
              <span className="italic font-bold">
                Bringing Gamers Together in Serenity.
              </span>{" "}
              <br />
              At Chill Gamer, our mission is to create a community that
              celebrates the calming side of gaming. We showcase games that
              inspire creativity, relaxation, and joy—perfect for those who want
              to unwind and enjoy gaming without pressure.
            </p>
          </div>
        </div>

        <div className="sm:flex gap-8 pt-10">
          <div className="sm:w-1/2">
            <h4 className="text-lg font-bold">Why Choose Chill Gamer?</h4>
            <span className="italic font-bold">
              Whether you’re a casual gamer or a seasoned pro, Chill Gamer is
              the perfect place to:
            </span>
            <ol className="text-sm">
              <li>Explore games that calm your mind.</li>
              <li>Take a break from the intensity of competitive gaming.</li>
              <li>
                Discover a peaceful community that values relaxation and fun
                over everything else.
              </li>
            </ol>
          </div>
          <div className="sm:w-1/2">
            <h4 className="text-lg font-bold">What We Offer</h4>
            <ol className="text-sm">
              <li>
                <b className="italic font-bold">Handpicked Chill Games: </b>A
                curated collection of games designed to reduce stress and
                enhance your gaming experience.
              </li>
              <li>
                <b className="italic font-bold">Community Engagement: </b>
                Connect with like-minded gamers through our forums and Discord,
                where you can share your experiences and tips.
              </li>
              <li>
                <b className="italic font-bold">Guides and Reviews: </b>Discover
                in-depth reviews, game guides, and tips to enjoy the most
                relaxing games.
              </li>
            </ol>
          </div>
        </div>

        <div className="sm:w-1/2 mx-auto pt-10">
          <h4 className="text-lg font-bold"> Our Vision</h4>
          <p className="text-sm">
            <span className="italic font-bold">
              Building a World of Chill Gamers.
            </span>{" "}
            <br />
            We envision a gaming world where players can enjoy immersive
            gameplay without the rush. A place where every click and every move
            brings joy and peace, making gaming an experience worth savoring.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
