import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";
import Partners from "./sections/Partners.jsx";
import AboutUs from "./sections/AboutUs.jsx"

const App = () => {
  return (
    <>
      <Header />
      <main className="mx-5 md:mx-8 lg:mx-14">
        <Hero />
        <Partners />
        <AboutUs />
      </main>
    </>
  );
};

export default App;
