import { aboutUs } from "../constants/data";
import { stats } from "../constants/data";
import Arrow from "../assets/arrow.png";

const AboutUs = () => {
  return (
    <section className="mt-10 flex flex-col justify-center gap-10 md:h-full lg:mt-0 lg:h-screen">
      <div>
        <h4 className="mb-3 text-center text-lg font-semibold text-green md:text-left lg:text-left">
          ABOUT US
        </h4>
        <h1 className="text-4xl">{aboutUs.heading}</h1>
      </div>
      <div className="w-[80%] space-y-5">
        <p className="info">{aboutUs.info}</p>
        <p className="info">{aboutUs.info2}</p>
      </div>
      <div className="grid grid-cols-2 justify-start gap-10 lg:flex lg:w-1/2">
        {stats.map((stat) => (
          <div key={stat.id} className="size-38 flex flex-col">
            <div className="text-2xl font-bold">{stat.count}</div>
            <p className="info">{stat.desc}</p>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <a href="#" className="font-medium text-green underline">
          Read more
        </a>
        <img src={Arrow} alt="" />
      </div>
    </section>
  );
};

export default AboutUs;
