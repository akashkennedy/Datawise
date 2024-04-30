// Importing Hero Data from data.js
import { hero } from "../constants/data.js";
import Button from "../components/Button.jsx";
import HeroWrapper from "../assets/heroWrapper.png";

const Hero = () => {
  return (
    <section className="mb-24 flex h-screen flex-col gap-5 px-5 pt-10 md:mb-10 md:h-full md:flex-col md:gap-10 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex  w-full flex-col justify-center gap-5 md:w-4/5 md:justify-between md:gap-10 lg:w-1/2 lg:gap-14">
        <h1 className="text-7xl font-semibold">{hero.heading}</h1>
        <p className="info font-normal">{hero.info}</p>
        <div className="flex w-full flex-col gap-3 md:flex-row lg:flex-row lg:gap-5">
          <Button label="Start Your Free Trial" />
          <Button label="Get a Demo" className="btn-secondary" />
        </div>
      </div>
      <img
        src={HeroWrapper}
        alt="Hero Wrapper"
        className="md:w-1/2 md:self-end lg:w-fit lg:self-center"
      />
    </section>
  );
};

export default Hero;
