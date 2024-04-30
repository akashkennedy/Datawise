// Importing Datawise Header Logo
import Logo from "../assets/headerIcons/headerLogo.png";
import CaretDown from "../assets/headerIcons/caret.png";
import HamburgerMenu from "../assets/headerIcons/menu.png";

// Importing Button
import Button from "../components/Button.jsx";

const Header = () => {
  return (
    <header className="border-b-gray/25 mx-5 flex h-20 items-center justify-between border-b p-5 md:mx-8 lg:mx-10">
      <div className="flex items-center gap-10">
        <img src={Logo} alt="Datawise" />
        <nav className="hidden lg:block">
          <ul className="text-gray flex items-center justify-between gap-5">
            <li>
              <a href="#">
                Features <img src={CaretDown} className="inline" />
              </a>
            </li>
            <li>
              <a href="#">
                Case Studies <img src={CaretDown} className="inline" />
              </a>
            </li>
            <li>
              <a href="#">English</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden items-center justify-between space-x-5 md:flex lg:flex">
        <Button label="Get a Demo" className="btn-secondary" />
        <Button label="Start Your Free Trail" />
      </div>
      <img
        src={HamburgerMenu}
        alt="Hamburger Menu"
        className="block cursor-pointer sm:hidden md:hidden"
      />
    </header>
  );
};

export default Header;
