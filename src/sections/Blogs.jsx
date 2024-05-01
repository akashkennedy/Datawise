import { blogs } from "../constants/data.js";
import { blogReports } from "../constants/data.js";

const Blogs = () => {
  return (
    <section className="mt-[650px] md:mt-0 lg:mt-0">
      <h4 className="mb-3 text-center text-lg font-semibold text-green">
        BLOGS
      </h4>
      <div className="mb-10 space-y-5">
        <h1 className="text-center text-4xl font-semibold">{blogs.heading}</h1>
        <p className="info mx-auto w-5/6 text-center font-normal">
          {blogs.info}
        </p>
      </div>
      <div className="flex flex-col items-center justify-between gap-10 md:grid md:grid-cols-2 lg:flex lg:flex-row">
        {blogReports.map((item) => (
          <div key={item.id} className="space-y-3">
            <img
              src={item.url}
              className="w-full rounded-xl sm:w-fit md:w-fit"
            />
            <p className="info text-sm font-semibold">{item.type}</p>
            <h6 className="text-lg font-semibold">{item.title}</h6>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Blogs;
