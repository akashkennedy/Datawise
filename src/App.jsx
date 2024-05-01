import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Partners from "./sections/Partners.jsx";
import AboutUs from "./sections/AboutUs.jsx";
import Solutions from "./sections/Solutions.jsx";
import Blogs from "./sections/Blogs.jsx";
import Analytics from "./sections/Analytics.jsx";
import Faqs from "./sections/Faqs.jsx";

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
      </main>
    </>
  );
};

export default App;
