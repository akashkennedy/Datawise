import { solutions } from "../constants/data";
import { features } from "../constants/data";

const Solutions = () => {
  return (
    <section className="mt-20 flex h-screen flex-col justify-between gap-10 md:mt-0 md:justify-center lg:mt-0 lg:items-center lg:justify-center">
      <div className="lg:w-5/12">
        <h4 className="mb-3 text-center text-lg font-semibold text-green">
          SOLUTIONS
        </h4>
        <h1 className="text-center text-4xl">
          {solutions.heading}
        </h1>
      </div>
      <div className="flex w-full grid-cols-2 flex-col gap-10 md:grid lg:flex lg:flex-row">
        {features.map((item) => (
          <div
            key={item.id}
            className="flex w-full flex-col gap-16 border-t-2 border-gray/25 py-5"
          >
            <img src={item.icon} className="size-16" />
            <div>
              <div className="w-8/12 text-2xl font-semibold">
                {item.heading}
              </div>
              <p className="info">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solutions;
