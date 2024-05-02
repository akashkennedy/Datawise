import {
  Hero,
  Analytics,
  Header,
  Footer,
  Partners,
  Blogs,
  AboutUs,
  Faqs,
  Solutions,
} from "./sections/index.js";

const App = () => {
  return (
    <>
      <Header />
      <main className="mx-5 md:mx-8 lg:mx-14">
        <Hero />
        <Partners />
        <AboutUs />
        <Solutions />
        <Blogs />
        <Analytics />
        <Faqs />
        <Footer />
      </main>
    </>
  );
};

export default App;
