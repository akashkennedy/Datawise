import { logo1, logo2, logo3, logo4, logo5, logo6 } from "../assets/index.js";

const Partners = () => {
  return (
    <section className="mt-48 flex items-center justify-around gap-3 p-5 md:mt-0 lg:mt-0">
      <img src={logo1} alt="logo1" />
      <img src={logo2} alt="logo2" />
      <img src={logo3} alt="logo3" className="hidden md:block lg:block" />
      <img src={logo4} alt="logo4" className="hidden md:block lg:block" />
      <img src={logo5} alt="logo5" className="hidden md:hidden lg:block" />
      <img src={logo6} alt="logo6" className="hidden md:hidden lg:block" />
    </section>
  );
};

export default Partners;
