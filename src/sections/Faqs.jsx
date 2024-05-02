import { faq } from "../constants/data";
import { faqs } from "../constants/data";

const Faqs = () => {
  return (
    <section className="mt-10 lg:mt-28">
      <h4 className="mb-3 text-lg font-semibold text-green">FAQS</h4>
      <div className="mb-8 space-y-3">
        <h1 className="text-4xl font-semibold">{faq.heading}</h1>
        <p className="info  lg:w-1/2">{faq.desc}</p>
      </div>
      <div className="flex flex-col gap-10 md:grid md:grid-cols-2 lg:grid lg:grid-cols-3">
        {faqs.map((faq) => (
          <div key={faq.id} className="max-w-96 space-y-3 lg:space-y-5">
            <h6 className="text-lg font-semibold">{faq.title}</h6>
            <p className="info ">{faq.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faqs;
