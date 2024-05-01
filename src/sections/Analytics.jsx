import { businessAnalyticsPoints } from "../constants/data";
import { businessAnalytics } from "../constants/data";
import BusinessAnalyticsImg from "../assets/businessAnalytics.png";
import Button from "../components/Button.jsx";

const Analytics = () => {
  return (
    <section className="mt-10 flex flex-col gap-10 md:mt-20 lg:mt-20 lg:flex-row lg:gap-28">
      <div className="flex flex-col justify-around gap-10 lg:gap-0">
        <h1 className="text-4xl font-semibold">{businessAnalytics.heading}</h1>
        <p className="info font-normal">{businessAnalytics.desc}</p>
        <div className="ml-6">
          {businessAnalyticsPoints.map((list) => (
            <ul key={list.id}>
              <li className="list-image-[url(./assets/listImg.png)]">
                {list.text}
              </li>
            </ul>
          ))}
        </div>
        <Button label="Get a Demo" className="w-full px-10 md:w-fit lg:w-fit" />
      </div>
      <img
        src={BusinessAnalyticsImg}
        alt="Business Analytics Image"
        className="md:h-fit"
      />
    </section>
  );
};

export default Analytics;
