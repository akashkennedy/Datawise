import Header from "./sections/Header.jsx";
import Hero from "./sections/Hero.jsx";

const App = () => {
  return (
    <>
      <Header />
      <main className="mx-5 md:mx-8 lg:mx-10">
        <Hero />
      </main>
    </>
  );
};

export default App;
